import { DynamicModule } from '@nestjs/common';
export declare class ZoneUsecasesProxyModule {
    static CREATE_ZONE_PROXY: string;
    static UPDATE_ZONE_PROXY: string;
    static DELETE_ZONE_PROXY: string;
    static LOAD_ALL_ZONE_PROXY: string;
    static LOAD_BY_ID_ZONE_PROXY: string;
    static RESTORE_ZONE_PROXY: string;
    static register(): DynamicModule;
}
