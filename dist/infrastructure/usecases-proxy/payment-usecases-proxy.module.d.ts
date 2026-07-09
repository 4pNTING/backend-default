import { DynamicModule } from '@nestjs/common';
export declare class PaymentUsecasesProxyModule {
    static PROCESS_PAYMENT_PROXY: string;
    static LOAD_PAYMENT_BY_ORDER_PROXY: string;
    static register(): DynamicModule;
}
