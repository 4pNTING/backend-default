import { CurrencyModel } from '../../domain/models/currency.model';
import { ActiveStatus } from '../../domain/enums/enum';
export declare class CurrencyEntity implements CurrencyModel {
    _id: string;
    code: string;
    name: string;
    isActive: ActiveStatus;
    createdAt: Date;
    updatedAt: Date;
}
