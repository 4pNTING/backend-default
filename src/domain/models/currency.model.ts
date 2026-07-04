import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CurrencyModel {
    _id: string;
    code: string;
    name: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export class CreateCurrencyRequest {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}

export class UpdateCurrencyRequest {
    @IsString()
    @IsNotEmpty()
    _id: string;

    @IsString()
    @IsOptional()
    code?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}

export class LoadAllCurrencyResponse {
    items: CurrencyModel[];
}
