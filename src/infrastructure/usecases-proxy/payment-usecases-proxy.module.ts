import { DynamicModule, Module } from '@nestjs/common';
import { DatabasePaymentRepository } from '../repositories/payment/payment.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { ProcessPaymentUseCase }      from '../../usecases/payment/processPayment.usecase';
import { LoadPaymentByOrderUseCase }  from '../../usecases/payment/loadPaymentByOrder.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class PaymentUsecasesProxyModule {
    static PROCESS_PAYMENT_PROXY          = 'ProcessPaymentProxy';
    static LOAD_PAYMENT_BY_ORDER_PROXY    = 'LoadPaymentByOrderProxy';

    static register(): DynamicModule {
        return {
            module: PaymentUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabasePaymentRepository],
                    provide: PaymentUsecasesProxyModule.PROCESS_PAYMENT_PROXY,
                    useFactory: (repo: DatabasePaymentRepository) => new ProcessPaymentUseCase(repo),
                },
                {
                    inject: [DatabasePaymentRepository],
                    provide: PaymentUsecasesProxyModule.LOAD_PAYMENT_BY_ORDER_PROXY,
                    useFactory: (repo: DatabasePaymentRepository) => new LoadPaymentByOrderUseCase(repo),
                },
            ],
            exports: [
                PaymentUsecasesProxyModule.PROCESS_PAYMENT_PROXY,
                PaymentUsecasesProxyModule.LOAD_PAYMENT_BY_ORDER_PROXY,
            ],
        };
    }
}
