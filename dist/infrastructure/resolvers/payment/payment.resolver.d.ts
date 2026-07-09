import { ProcessPaymentDto, LoadPaymentByOrderDto } from './payment.model';
import { ProcessPaymentUseCase } from '../../../usecases/payment/processPayment.usecase';
import { LoadPaymentByOrderUseCase } from '../../../usecases/payment/loadPaymentByOrder.usecase';
export declare class PaymentResolver {
    private readonly processPaymentUseCase;
    private readonly loadPaymentByOrderUseCase;
    constructor(processPaymentUseCase: ProcessPaymentUseCase, loadPaymentByOrderUseCase: LoadPaymentByOrderUseCase);
    loadPaymentByOrder(input: LoadPaymentByOrderDto): Promise<{
        payment: import("../../../domain/models/payment.model").PaymentModel[];
    }>;
    processPayment(input: ProcessPaymentDto): Promise<{
        payment: import("../../../domain/models/payment.model").ProcessPaymentResponse;
    }>;
}
