export declare class Currency {
    _id: string;
    code: string;
    name: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class LoadCurrencyResponse {
    currency: Currency[];
}
export declare class LoadCurrencyByIdResponse {
    currency: Currency;
}
export declare class CreateCurrencyResponse {
    currency: Currency;
}
export declare class UpdateCurrencyResponse {
    currency: Currency;
}
export declare class DeleteCurrencyResponse {
    _id: string;
}
export declare class CreateCurrencyDto {
    code: string;
    name: string;
    isActive: boolean;
}
export declare class UpdateCurrencyDto {
    _id: string;
    code?: string;
    name?: string;
    isActive?: boolean;
}
export declare class LoadCurrencyByIdDto {
    _id: string;
}
export declare class DeleteCurrencyDto {
    _id: string;
}
