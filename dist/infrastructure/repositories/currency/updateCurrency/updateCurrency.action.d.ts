import { QueryRunner } from 'typeorm';
import { UpdateCurrencyRequest, CurrencyModel } from '../../../../domain/models/currency.model';
export declare class UpdateCurrencyAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel>;
}
