import { PaymentMethod } from '../../../domain/enums/enum';
export declare class Payment {
    _id: string;
    orderId: string;
    currencyId: string;
    method: PaymentMethod;
    amount: number;
    change: number;
    paidAt: Date;
    createdAt?: Date;
}
export declare class PaymentResponse {
    payment: Payment;
}
export declare class LoadPaymentResponse {
    payment: Payment[];
}
export declare class ProcessPaymentDto {
    orderId: string;
    currencyId: string;
    method: PaymentMethod;
    amount: number;
}
export declare class LoadPaymentByOrderDto {
    orderId: string;
}
