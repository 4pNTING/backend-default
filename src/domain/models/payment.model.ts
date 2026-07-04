import { PaymentMethod } from '../enums/enum';

// ─── Payment Model ────────────────────────────────────────
export class PaymentModel {
    _id: string;
    orderId: string;        // FK → Order
    currencyId: string;     // FK → Currency
    method: PaymentMethod;
    amount: number;         // ยอดที่ชำระ
    change: number;         // เงินทอน
    paidAt: Date;
    createdAt?: Date;
}

// ─── Process Payment ──────────────────────────────────────
export class ProcessPaymentRequest {
    orderId: string;
    currencyId: string;
    method: PaymentMethod;
    amount: number;         // เงินที่ลูกค้าให้มา
}

export class ProcessPaymentResponse extends PaymentModel { }

// ─── Load ─────────────────────────────────────────────────
export class LoadPaymentByOrderRequest {
    orderId: string;
}

export class LoadPaymentByOrderResponse {
    items: PaymentModel[];
}

export class LoadPaymentByIdRequest {
    _id: string;
}

export class LoadPaymentByIdResponse extends PaymentModel { }
