import { test, expect, Locator } from '@playwright/test';

export class BaseElement {
    locatorElement: Locator;

    constructor(    locatorElement: Locator,
        parentContainerLocator?: Locator,) {
            this.locatorElement = locatorElement;
    }

    public get getLocatorElement(): Locator {
        return this.locatorElement;
    }

    public set setLocatorElement(locatorElement: Locator) {
        this.locatorElement = locatorElement;
    }


}
