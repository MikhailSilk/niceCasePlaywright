import { test, expect, webkit } from '@playwright/test';
import { log } from 'console';
import { randomInt } from 'crypto';
import { chromium } from 'playwright';
import { MainPage, MainPageBlocks } from './main-page';

test('Open main pages', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('nice sale', async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    let parentLocator = `//div[@class="menu-only"]`;
    let test = page.locator(`${parentLocator}//*[@href="/uslugi/"]`);
    // let test = page.locator(`${parentLocator}//*[@href="/sale/"]`);
    log((await test.all()).length);
    await test.hover();
    await expect(page).toHaveURL('https://nice-case.ru/sale/');
});

test('scroll nice blog', async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    await page.locator(`//div [contains(@class, 'CATALOG_SECTIONS')]`).scrollIntoViewIfNeeded();
    let parentLocator = `//div[@id='headerfixed']`;
    let test = page.locator(`${parentLocator}//a[@href="/contacts/stores/" and @class='']`);
    log((await test.all()).length);
    await test.click();
    await expect(page).toHaveURL('https://nice-case.ru/contacts/stores/');
});

test('Open rasprodazha', async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: 'domcontentloaded' });
    await page.locator(`//div [contains(@class, 'CATALOG_SECTIONS')]`).scrollIntoViewIfNeeded();
    let test = await page.locator(`//a[@class="catalog-card" and @href = "/catalog/rasprodazha/"]`);
    await test.click();
    await expect(page).toHaveURL('https://nice-case.ru/catalog/rasprodazha/');
    /*   
    await page.goto('https://nice-case.ru/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2342);

    xPath
    //*[@id="content"]/div/div/div/div[3]/div/div/div/div[2]/div/a[18]/div[2]
    /html/body/div[6]/div[8]/div/div/div/div[3]/div/div/div/div[2]/div/a[18]/div[2]
    [class="catalog-card"][href = "/catalog/rasprodazha/"]
    
    await expect(test).toHaveClass('catalog-card');
    await log((await test.all()).length);
    
    await page.locator(`//a [contains(@data-marker, 'visual-rubricator/block-Недвижимость')]`).getByRole('link', { name: 'Недвижимость' }).click();
     let test = await page.getByText('Распродажа');
    let test = page.locator(`//div [contains(@class, 'catalog-card__text')]`);
    let test = page.locator(`//a[@class="catalog-card" and @href = "/catalog/rasprodazha/"]`).scrollIntoViewIfNeeded(); 
    */
});


test('avito search', async ({ page }) => {

    //   const browser = await chromium.launch({
    //     headless: false,  // Открываем браузер в графическом режиме
    //     devtools: true    // Открываем DevTools
    //   });
    //   const context = await browser.newContext();
    await page.goto('https://www.avito.ru/', { waitUntil: 'domcontentloaded' });


    // await page.goto('https://www.avito.ru/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(randomInt(2000, 5000));
    await page.reload();

    await page.waitForTimeout(randomInt(2000, 5000));
    const niceSearch = page.getByPlaceholder('Поиск по объявлениям');
    log(await niceSearch.all());
    await niceSearch.click();

    // await niceSearch.fill('Apple');
    await page.keyboard.type('Apple');

    await page.waitForTimeout(randomInt(2000, 5000));
    await page.getByRole('button', { name: 'Найти' }).click();
    // await niceSearch.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page).toHaveURL(`https://www.avito.ru/all?q=Apple`);
});

test('Test', async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    let parentLocator = `//div[@class="menu-only"]`;

    const pageTest = new MainPage(page);
    // await pageTest.clickBannerItemByIndex(5);
    // await pageTest.clickBannerButtonByLabel(`Выбрать в каталоге`, 5);
    let test = `//*[@title = "Apple"]`; //clickItemInBlock
    await pageTest.clickItemInBlock(test, MainPageBlocks.CATALOG_SECTIONS);
    await pageTest.navigateToBlock(MainPageBlocks.CUSTOM_CATALOG_2);
    // Выбрать в каталоге	
    // let test = page.locator(`${parentLocator}//*[@href="/uslugi/"]`);
    // let test = page.locator(`${parentLocator}//*[@href="/sale/"]`);
    // console.log((await test.all()).length);
    // await test.hover();
    // await expect(page).toHaveURL('https://nice-case.ru/sale/');
});


/*type AtLeastOne<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> & 
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys];

class MyClass {
  param1?: string;
  param2?: string;
  param3?: string;

  constructor(params: AtLeastOne<MyClass, 'param1' | 'param2' | 'param3'>) {
    this.param1 = params.param1;
    this.param2 = params.param2;
    this.param3 = params.param3;
  }
}
let test = new MyClass({param3:'test'});
*/

/* export class Menu extends BaseElement {
    menuType: string;

    public get getMenuType(): string {
        return this.menuType;
    }

    public set setMenuType(menuType: string) {
        this.menuType = menuType;
    }

    constructor(locatorElement: Locator,
        menuType: string,
        parentContainerLocator?: Locator,
        hrefElement?: string,
        classElement?: string) {
        super(locatorElement, parentContainerLocator, hrefElement, classElement);
        this.menuType = menuType;
    }
    getMenuItem(menuItem: BaseElement): Locator {
        menuItem 
     }


}*/
