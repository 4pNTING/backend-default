import { DynamicModule } from '@nestjs/common';
export declare class MenuOptionUsecasesProxyModule {
    static CREATE_MENU_OPTION_PROXY: string;
    static UPDATE_MENU_OPTION_PROXY: string;
    static DELETE_MENU_OPTION_PROXY: string;
    static LOAD_MENU_OPTION_BY_ITEM_PROXY: string;
    static register(): DynamicModule;
}
