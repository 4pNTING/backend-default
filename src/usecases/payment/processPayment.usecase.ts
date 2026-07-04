import { IPaymentRepository } from '@domain/repositories/payment.repository.interface';
import { ProcessPaymentRequest, ProcessPaymentResponse } from '@domain/models/payment.model';

export class ProcessPaymentUseCase {
    constructor(private readonly paymentRepository: IPaymentRepository) { }
    async execute(params: ProcessPaymentRequest): Promise<ProcessPaymentResponse> {
        return await this.paymentRepository.processPayment(params);
    }
}
