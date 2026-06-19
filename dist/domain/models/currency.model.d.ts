export declare class CurrencyModel {
    _id: string;
    code: string;
    name: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateCurrencyRequest {
    code: string;
    name: string;
    isActive: boolean;
}
export declare class UpdateCurrencyRequest {
    _id: string;
    code?: string;
    name?: string;
    isActive?: boolean;
}
export declare class LoadAllCurrencyResponse {
    items: CurrencyModel[];
}
