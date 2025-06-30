import { log } from 'console';
import { randomInt } from 'crypto';
import { chromium } from 'playwright';
import { MainPage, MainPageBlocks } from '../../src/page-object/main-page';
import { test, expect, webkit } from '@playwright/test';

test('Open main pages', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('nice sale', async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    let parentLocator = `//div[@class="menu-only"]`;
    let test = page.locator(`${parentLocator}//*[@href="/sale/"]`);
    await test.click();
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
    // let test = page.locator(`${parentLocator}//*[@href="/uslugi/"]`);
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

test('Test', async ({ page }) => {
    await page.goto('https://nice-case.ru/sale', { waitUntil: "domcontentloaded" });
    let test1 = page.locator(`.${MainPageBlocks.CUSTOM_CATALOG_2}`);
    console.log(await test1.count());
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const pageTest = new MainPage(page);
    
    console.log(await test1.count());
    
    await test1.scrollIntoViewIfNeeded();
    console.log(await test1.count());
    
    await pageTest.navigateToBlock(MainPageBlocks.CUSTOM_CATALOG_2);
    await expect(page).toHaveURL('https://nice-case.ru/');
    // let parentLocator = `//div[@class="menu-only"]`;
    // let test = `//*[@title = "Apple"]`; //clickItemInBlock

    // await pageTest.clickItemInBlock(test, MainPageBlocks.CATALOG_SECTIONS);
    // await pageTest.clickBannerItemByIndex(5);
    // await pageTest.clickBannerButtonByLabel(`Выбрать в каталоге`, 5);
    // await page.waitForTimeout(randomInt(2000, 5000));
    // await pageTest.clickItemInBlock(`:text-is("Apple Watch")`, MainPageBlocks.CUSTOM_CATALOG_2);
    // await pageTest.getCatalogElement(`Apple Watch series 10 46 мм корпус из алюминия цвета «чёрный глянец» спортивный ремешок черного цвета`, MainPageBlocks.CUSTOM_CATALOG_2);
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
