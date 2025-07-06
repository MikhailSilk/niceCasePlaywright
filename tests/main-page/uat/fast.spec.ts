import test, { expect } from "@playwright/test";
import { MainPage, MainPageBlocks } from "../../../src/page-object/main-page";
import { log } from "console";

test(`Repair block`, async ({ page }) => {
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });
    const mainPage = new MainPage(page);
    await mainPage.clickItemInBlock(`//*[@title = "Ремонт"]`, MainPageBlocks.BIG_BANNER_INDEX);
    await expect(page).toHaveURL(`https://nice-case.ru/services/`);
})
