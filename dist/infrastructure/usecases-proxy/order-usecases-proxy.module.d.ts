import { DynamicModule } from '@nestjs/common';
export declare class OrderUsecasesProxyModule {
    static CREATE_ORDER_PROXY: string;
    static ADD_ORDER_ITEM_PROXY: string;
    static REMOVE_ORDER_ITEM_PROXY: string;
    static UPDATE_ORDER_STATUS_PROXY: string;
    static CANCEL_ORDER_PROXY: string;
    static LOAD_ORDER_PROXY: string;
    static LOAD_ORDER_BY_ID_PROXY: string;
    static LOAD_ORDER_BY_TABLE_PROXY: string;
    static register(): DynamicModule;
}
