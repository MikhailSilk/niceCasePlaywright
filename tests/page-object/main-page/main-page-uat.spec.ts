import {test, expect } from "@playwright/test";
import { Button, ButtonWithDropdownMenu } from "../../common-component/buttons";

test('Refactoring code style', async({page})=>{
    await page.goto('https://nice-case.ru/', { waitUntil: "domcontentloaded" });

    let parentXpathStr = `//div[@class="menu-only"]`;
    let fullparentXpathStr = `${parentXpathStr}//*[@href="/uslugi/"]`;
    const parentLocator = page.locator(`${parentXpathStr}//*[@href="/uslugi/"]`);
    const buttonLocator = page.locator(`${fullparentXpathStr}//..//a[@href="/uslugi/delivery/"]`);

    const uslugi = 'Услуги';
    const delivery = 'Доставка';
    const shops = 'Магазины';
    const about = 'О компании';
    
    // await page.locator(`//div [contains(@class, 'CATALOG_SECTIONS')]`).scrollIntoViewIfNeeded();
    // const test = page.locator(`//div[@class="menu-only"]//div`,{hasText: `${uslugi}`});
    
    const testDropdownBefore = page.locator('#header').getByRole('link', { name: 'Магазины'});
    console.log(`testDropdownBefore ` + (await testDropdownBefore.all()).length);
    const test = page.locator('#header').getByRole('link', { name: 'О компании'});
    await test.hover();
    await test.waitFor({state: 'visible'});
    // await page.waitForSelector(`.dropdown-menu >> internal:role=link[name="Магазины"i]`, { state: 'visible' });
    const testDropdownAfter = page.locator('#header').getByRole('link', { name: 'Магазины'});
    console.log(`testDropdownAfter ` + (await testDropdownAfter.all()).length);
    
    const testShops = page.locator('#header').getByRole('link', { name: 'Магазины'});
    console.log(`testShops ` + (await testShops.all()).length);
    await testShops.click();

    let button = new Button(buttonLocator);
    let buttonWithDropdown = new ButtonWithDropdownMenu(testShops, parentLocator);

    console.log((await parentLocator.all()).length);
    console.log((await buttonLocator.all()).length);
    
    await buttonWithDropdown.clickDropdownMenuItem()
    // button.click();
    await expect(page).toHaveURL('https://nice-case.ru/uslugi/delivery/');
});

