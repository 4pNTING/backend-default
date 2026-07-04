import { IPaymentRepository } from '@domain/repositories/payment.repository.interface';
import { LoadPaymentByOrderRequest, LoadPaymentByOrderResponse } from '@domain/models/payment.model';

export class LoadPaymentByOrderUseCase {
    constructor(private readonly paymentRepository: IPaymentRepository) { }
    async execute(params: LoadPaymentByOrderRequest): Promise<LoadPaymentByOrderResponse> {
        return await this.paymentRepository.findByOrder(params);
    }
}
