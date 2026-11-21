import { DynamicModule } from '@nestjs/common';
export declare class InventoryUsecasesProxyModule {
    static CREATE_INVENTORY_ITEM_PROXY: string;
    static UPDATE_INVENTORY_ITEM_PROXY: string;
    static DELETE_INVENTORY_ITEM_PROXY: string;
    static LOAD_INVENTORY_PROXY: string;
    static LOAD_LOW_STOCK_ALERT_PROXY: string;
    static ADJUST_STOCK_PROXY: string;
    static SET_MENU_ITEM_RECIPE_PROXY: string;
    static LOAD_RECIPE_BY_MENU_ITEM_PROXY: string;
    static LOAD_STOCK_HISTORY_PROXY: string;
    static register(): DynamicModule;
}
