import test, { expect } from "@playwright/test";
import { MainPage, MainPageBlocks } from "../../../src/page-object/main-page";

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
    await mainPage.clickItemInBlock(`:text-is("Apple Watch")`, MainPageBlocks.CUSTOM_CATALOG_2);
    await mainPage.
    await expect(page).toHaveTitle("Ноутбук Apple MacBook")
    console.log("test");
})

test (`Test`, async ({page}) => {
}) 