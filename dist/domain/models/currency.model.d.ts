import { ActiveStatus } from '../enums/enum';
export declare class CurrencyModel {
    _id: string;
    code: string;
    name: string;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateCurrencyRequest {
    code: string;
    name: string;
    isActive?: ActiveStatus;
}
export declare class UpdateCurrencyRequest {
    _id: string;
    code?: string;
    name?: string;
    isActive?: ActiveStatus;
}
export declare class LoadAllCurrencyResponse {
    items: CurrencyModel[];
}
