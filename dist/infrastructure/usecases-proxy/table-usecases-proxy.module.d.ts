import { DynamicModule } from '@nestjs/common';
export declare class TableUsecasesProxyModule {
    static CREATE_TABLE_PROXY: string;
    static UPDATE_TABLE_PROXY: string;
    static DELETE_TABLE_PROXY: string;
    static RESTORE_TABLE_PROXY: string;
    static LOAD_TABLE_PROXY: string;
    static LOAD_BY_ID_TABLE_PROXY: string;
    static LOAD_TABLE_BY_ZONE_PROXY: string;
    static register(): DynamicModule;
}
