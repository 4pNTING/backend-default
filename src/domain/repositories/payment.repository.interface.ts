import {
    ProcessPaymentRequest, ProcessPaymentResponse,
    LoadPaymentByOrderRequest, LoadPaymentByOrderResponse,
    LoadPaymentByIdRequest, LoadPaymentByIdResponse,
} from '../models/payment.model';

export interface IPaymentRepository {
    processPayment(params: ProcessPaymentRequest): Promise<ProcessPaymentResponse>;
    findByOrder(params: LoadPaymentByOrderRequest): Promise<LoadPaymentByOrderResponse>;
    findById(params: LoadPaymentByIdRequest): Promise<LoadPaymentByIdResponse | null>;
}
