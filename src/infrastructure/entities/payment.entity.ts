import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { PaymentModel } from '../../domain/models/payment.model';
import { PaymentMethod } from '../../domain/enums/enum';
import { OrderEntity } from './order.entity';
import { CurrencyEntity } from './currency.entity';

@Entity('payments')
export class PaymentEntity implements PaymentModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'uuid' })
    orderId: string;

    @ManyToOne(() => OrderEntity, { eager: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'orderId' })
    order: OrderEntity;

    @Column({ type: 'uuid' })
    currencyId: string;

    @ManyToOne(() => CurrencyEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'currencyId' })
    currency: CurrencyEntity;

    @Column({
        type: 'enum',
        enum: PaymentMethod,
        default: PaymentMethod.cash,
    })
    method: PaymentMethod;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    amount: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    change: number;

    @Column({ type: 'timestamp' })
    paidAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}
