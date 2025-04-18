import { Locator, Page } from "@playwright/test";

export class AbstractPage {
    page: Page;
    contentContainerLocator: Locator;
    headerContainerLocator: Locator;
    headerfixedContainerLocator: Locator;

    constructor(page:Page) {
        this.page = page;
        this.headerContainerLocator = this.page.locator(`#header`);
        this.headerfixedContainerLocator = this.page.locator(`#headerfixed`);
        this.contentContainerLocator = this.page.locator(`#content`);
    }
}