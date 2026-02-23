import { DynamicModule } from '@nestjs/common';
export declare class CategoryUsecasesProxyModule {
    static CREATE_CATEGORY_PROXY: string;
    static UPDATE_CATEGORY_PROXY: string;
    static DELETE_CATEGORY_PROXY: string;
    static LOAD_CATEGORY_PROXY: string;
    static LOAD_BY_ID_CATEGORY_PROXY: string;
    static RESTORE_CATEGORY_PROXY: string;
    static register(): DynamicModule;
}
