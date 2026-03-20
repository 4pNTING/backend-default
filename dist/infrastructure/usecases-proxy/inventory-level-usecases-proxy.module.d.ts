import { DynamicModule } from '@nestjs/common';
export declare class InventoryLevelUsecasesProxyModule {
    static LOAD_INVENTORY_LEVEL_PROXY: string;
    static LOAD_BY_ID_INVENTORY_LEVEL_PROXY: string;
    static LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY: string;
    static CREATE_INVENTORY_LEVEL_PROXY: string;
    static UPDATE_INVENTORY_LEVEL_PROXY: string;
    static register(): DynamicModule;
}
