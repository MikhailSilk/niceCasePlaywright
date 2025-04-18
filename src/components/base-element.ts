import { test, expect, Locator } from '@playwright/test';

export class BaseElement {
    elementLocator: Locator;
    parentContainerLocator: Locator;

    constructor(    elementLocator: Locator, parentContainerLocator?: Locator) {
            this.elementLocator = elementLocator;
            if (parentContainerLocator){
                this.parentContainerLocator = parentContainerLocator;
            }
    }

    public get getElementLocator(): Locator {
        return this.elementLocator;
    }

    public set setElementLocator(elementLocator: Locator) {
        this.elementLocator = elementLocator;
    }


}
