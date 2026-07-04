import { ObjectType, Field, InputType, Float } from '@nestjs/graphql';
import { PaymentMethod } from '../../../domain/enums/enum';

@ObjectType()
export class Payment {
    @Field({ nullable: true })
    _id: string;

    @Field()
    orderId: string;

    @Field()
    currencyId: string;

    @Field(() => String)
    method: PaymentMethod;

    @Field(() => Float)
    amount: number;

    @Field(() => Float)
    change: number;

    @Field()
    paidAt: Date;

    @Field({ nullable: true })
    createdAt?: Date;
}

@ObjectType()
export class PaymentResponse {
    @Field(() => Payment, { nullable: true })
    payment: Payment;
}

@ObjectType()
export class LoadPaymentResponse {
    @Field(() => [Payment])
    payment: Payment[];
}

@InputType()
export class ProcessPaymentDto {
    @Field()
    orderId: string;

    @Field()
    currencyId: string;

    @Field(() => String)
    method: PaymentMethod;

    @Field(() => Float)
    amount: number;
}

@InputType()
export class LoadPaymentByOrderDto {
    @Field()
    orderId: string;
}
