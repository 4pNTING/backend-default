import { CurrencyModel } from '../../domain/models/currency.model';
export declare class CurrencyEntity implements CurrencyModel {
    _id: string;
    code: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
