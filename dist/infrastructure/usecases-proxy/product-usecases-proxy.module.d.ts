import { DynamicModule } from '@nestjs/common';
export declare class ProductUsecasesProxyModule {
    static CREATE_PRODUCT_PROXY: string;
    static UPDATE_PRODUCT_PROXY: string;
    static DELETE_PRODUCT_PROXY: string;
    static LOAD_PRODUCT_PROXY: string;
    static LOAD_BY_ID_PRODUCT_PROXY: string;
    static RESTORE_PRODUCT_PROXY: string;
    static register(): DynamicModule;
}
