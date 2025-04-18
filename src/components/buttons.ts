// import { Locator } from '@playwright/test';
// import {BaseElement} from './base-element';

// export class Button extends BaseElement {
//     async click(): Promise<void> {
//         await this.locatorElement.click(); 
//      }
// }
// export class ButtonWithDropdownMenu extends BaseElement{
//     dropdownMenuLocator: Locator;
//     constructor(locatorElement: Locator, dropdownMenuLocator: Locator){
//         super(locatorElement);
//         this.dropdownMenuLocator = dropdownMenuLocator;
//     }
//     async clickDropdownMenuItem():Promise<void>{
//         await this.dropdownMenuLocator?.hover();
//         await this.locatorElement.click();
//     }
//     async isHover(): Promise<boolean>{
//         await this.dropdownMenuLocator?.hover();
//         return this.locatorElement.isVisible();
//     }
// }
// export class SliderButton extends BaseElement {
//     //to do
// }