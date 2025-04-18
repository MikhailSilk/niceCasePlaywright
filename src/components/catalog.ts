import { Locator } from '@playwright/test';
import {BaseElement} from './base-element';

export class Catalog extends BaseElement{
    
    async clickCatalogItem(itemText: string) {
        await this.elementLocator.getByText(itemText).click();
    }
    
    
}