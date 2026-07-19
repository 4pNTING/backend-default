import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ActiveStatus } from '../enums/enum';

export class CurrencyModel {
    _id: string;
    uniqueId: number;
    uid: string;
    code: string;
    name: string;
    isActive: ActiveStatus;
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

    @IsOptional()
    isActive?: ActiveStatus;
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

    @IsOptional()
    isActive?: ActiveStatus;
}

export class LoadAllCurrencyResponse {
    items: CurrencyModel[];
    total: number;
}
