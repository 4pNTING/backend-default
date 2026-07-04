import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    Payment, LoadPaymentResponse, PaymentResponse,
    ProcessPaymentDto, LoadPaymentByOrderDto,
} from './payment.model';
import { PaymentUsecasesProxyModule }    from '../../usecases-proxy/payment-usecases-proxy.module';
import { ProcessPaymentUseCase }         from '../../../usecases/payment/processPayment.usecase';
import { LoadPaymentByOrderUseCase }     from '../../../usecases/payment/loadPaymentByOrder.usecase';

@Resolver(() => Payment)
@UseGuards(JwtAuthGuard)
export class PaymentResolver {
    constructor(
        @Inject(PaymentUsecasesProxyModule.PROCESS_PAYMENT_PROXY)
        private readonly processPaymentUseCase: ProcessPaymentUseCase,

        @Inject(PaymentUsecasesProxyModule.LOAD_PAYMENT_BY_ORDER_PROXY)
        private readonly loadPaymentByOrderUseCase: LoadPaymentByOrderUseCase,
    ) { }

    @Query(() => LoadPaymentResponse, { name: 'loadPaymentByOrder' })
    async loadPaymentByOrder(@Args('input') input: LoadPaymentByOrderDto) {
        const result = await this.loadPaymentByOrderUseCase.execute({ orderId: input.orderId });
        return { payment: result.items };
    }

    @Mutation(() => PaymentResponse)
    async processPayment(@Args('input') input: ProcessPaymentDto) {
        const result = await this.processPaymentUseCase.execute(input);
        return { payment: result };
    }
}
