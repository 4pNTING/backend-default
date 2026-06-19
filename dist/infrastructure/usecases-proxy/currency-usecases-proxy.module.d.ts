import { DynamicModule } from '@nestjs/common';
export declare class CurrencyUsecasesProxyModule {
    static CREATE_CURRENCY_PROXY: string;
    static UPDATE_CURRENCY_PROXY: string;
    static DELETE_CURRENCY_PROXY: string;
    static LOAD_ALL_CURRENCY_PROXY: string;
    static LOAD_BY_ID_CURRENCY_PROXY: string;
    static register(): DynamicModule;
}
