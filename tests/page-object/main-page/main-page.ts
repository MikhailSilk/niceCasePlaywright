import { test, expect, Locator } from '@playwright/test';
import { AbstractPage } from '../../common-component/abstract-page';

export enum MainPageBlocks {
    /** Блок `Популярные категории` */
    CATALOG_SECTIONS = `CATALOG_SECTIONS`,
    /** Блок `Лучшие предложения` */
    CUSTOM_CATALOG_2 = `CUSTOM_CATALOG_2`,
    /** Блок `Бренды` */
    BRANDS = `BRANDS`,
    /** Блок `Подборки товаров` */
    COLLECTIONS = `COLLECTIONS`,
    /** Блок `Мы ВКонтакте` */
    VK = `VK`,
    /** Блок `Выгодные предложения` */
    SALE = `SALE`,
    /** Блок `О компании` */
    CUSTOM_TEXT = `CUSTOM_TEXT`,
    /** Блок `Отзывы` */
    REVIEWS = `REVIEWS`,
    /** Блок `Блог` */
    BLOG = `BLOG`,
    /** Блок `Новости` */
    NEWS = `NEWS`,
}

// console.log(` ` + (await .all()).length);
export class MainPage extends AbstractPage {
    mainBannerLocator = this.contentContainerLocator.locator(`.top_slider_wrapp`);

    async clickBannerItemByIndex(bannerSwiperIndex: number): Promise<void> {
        const bannerSwiperLocator = this.mainBannerLocator.getByLabel(`Go to slide ${bannerSwiperIndex}`);
        await bannerSwiperLocator.click();
        await this.page.waitForTimeout(2000);
        await this.mainBannerLocator.click();
    }
    async clickBannerButtonByLabel(lable: string, bannerSwiperIndex: number): Promise<void> {
        const bannerSwiperLocator = this.contentContainerLocator.getByLabel(`Go to slide ${bannerSwiperIndex}`);
        await bannerSwiperLocator.click();
        await this.page.waitForTimeout(2000);
        let currentBannerItem = await this.getCurrentBannerItem();
        await expect(currentBannerItem).toHaveAttribute(`data-swiper-slide-index`, `${bannerSwiperIndex - 1}`);
        await currentBannerItem.getByText(`${lable}`).click();
    }
    async clickBannerSwiperByIndex(bannerSwiperIndex: number): Promise<void> {
        const bannerItem = this.contentContainerLocator.getByLabel(`Go to slide ${bannerSwiperIndex}`);
        await bannerItem.click();
    }
    async navigateToBlock(blockLabel: MainPageBlocks): Promise<void> {
        const blockLocator =  this.contentContainerLocator.locator(`.${blockLabel}`);
        await blockLocator.scrollIntoViewIfNeeded();
        await expect (blockLocator).toBeInViewport();
        await this.page.waitForTimeout(2000);        
    }
    async clickItemInBlock(elementsPath: string, blockLabel: MainPageBlocks): Promise<void> {
        await this.navigateToBlock(blockLabel);
        let itemLocator =  this.contentContainerLocator.locator(`.${blockLabel}`).locator(`${elementsPath}`)
        await itemLocator.click();   
    }
    async getCurrentBannerItem(): Promise<Locator> {
        return this.mainBannerLocator.locator(`.swiper-slide-active`);
    }
}