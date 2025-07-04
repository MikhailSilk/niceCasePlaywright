import test, { expect } from "@playwright/test";
import { MainPage, MainPageBlocks } from "../../../src/page-object/main-page";
import { log } from "console";

test(`Trade-in block`, async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    await mainPage.clickItemInBlock(`//*[@title = "Trade-In"]`, MainPageBlocks.BIG_BANNER_INDEX);
    await expect(page).toHaveURL(`https://nice-case.ru/trade-in/`);
})

test(`Repair block`, async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    await mainPage.clickItemInBlock(`//*[@title = "Ремонт"]`, MainPageBlocks.BIG_BANNER_INDEX);
    await expect(page).toHaveURL(`https://nice-case.ru/services/`);
})

test(`Open the first main banner ads`, async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    await mainPage.clickBannerItemByIndex(1);
    await expect(page).toHaveURL(`https://nice-case.ru/catalog/apple/iphone/`);
})
test(`Open fourth ads in main banner and click on the button "Выбрать в каталоге"`, async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    await mainPage.clickBannerButtonByLabel(`Выбрать в каталоге`,4);
    await expect(page).toHaveURL(`https://nice-case.ru/catalog/sumki_i_chemodany/ryukzaki_i_portfeli/`);
})
test (`Open MacBook filter in "Лучшие предложения" block `, async ({page}) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    let a = 0;
    let b = 0;
    const blockLocator =  mainPage.contentContainerLocator.locator(`.CUSTOM_CATALOG_2`);
    await mainPage.clickItemInBlock(`:text-is("Apple Watch")`, MainPageBlocks.CUSTOM_CATALOG_2);
    await expect(blockLocator).toContainText("Apple Watch series 10 46 мм корпус из алюминия цвета «чёрный глянец» спортивный ремешок черного цвета");
})
test (`Block load image `, async ({page}) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    // await page.route('**/kgg1de4wknhyw8qnot2d0vj4mtysy6uv.png', route => route.abort());
    
    const mainPage = new MainPage(page);
    const blockLocator =  mainPage.contentContainerLocator.locator(`.${MainPageBlocks.CATALOG_SECTIONS}`);
    await mainPage.navigateToBlock(MainPageBlocks.CATALOG_SECTIONS);
    const imageLocator = blockLocator.getByAltText(`Apple на прозрачном фоне в магазине Nice case`);
    const isLoaded = await imageLocator.evaluate((img: HTMLImageElement) =>
        img.complete && img.naturalWidth > 0
      );(
    expect(isLoaded).toBeTruthy());
}) 

test (`Test`, async ({page}) => {
}) 