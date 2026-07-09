import { PaymentModel } from '../../domain/models/payment.model';
import { PaymentMethod } from '../../domain/enums/enum';
import { OrderEntity } from './order.entity';
import { CurrencyEntity } from './currency.entity';
export declare class PaymentEntity implements PaymentModel {
    _id: string;
    orderId: string;
    order: OrderEntity;
    currencyId: string;
    currency: CurrencyEntity;
    method: PaymentMethod;
    amount: number;
    change: number;
    paidAt: Date;
    createdAt: Date;
}
