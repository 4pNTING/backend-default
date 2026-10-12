import { IPaymentRepository } from '../../domain/repositories/payment.repository.interface.js';
import { ProcessPaymentRequest, ProcessPaymentResponse } from '../../domain/models/payment.model.js';
export declare class ProcessPaymentUseCase {
    private readonly paymentRepository;
    constructor(paymentRepository: IPaymentRepository);
    execute(params: ProcessPaymentRequest): Promise<ProcessPaymentResponse>;
}
