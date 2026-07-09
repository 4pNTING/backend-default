import { PaymentMethod } from '../enums/enum';
export declare class PaymentModel {
    _id: string;
    orderId: string;
    currencyId: string;
    method: PaymentMethod;
    amount: number;
    change: number;
    paidAt: Date;
    createdAt?: Date;
}
export declare class ProcessPaymentRequest {
    orderId: string;
    currencyId: string;
    method: PaymentMethod;
    amount: number;
}
export declare class ProcessPaymentResponse extends PaymentModel {
}
export declare class LoadPaymentByOrderRequest {
    orderId: string;
}
export declare class LoadPaymentByOrderResponse {
    items: PaymentModel[];
}
export declare class LoadPaymentByIdRequest {
    _id: string;
}
export declare class LoadPaymentByIdResponse extends PaymentModel {
}
