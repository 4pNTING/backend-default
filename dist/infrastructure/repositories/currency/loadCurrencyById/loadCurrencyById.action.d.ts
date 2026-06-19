import { QueryRunner } from 'typeorm';
import { CurrencyModel } from '../../../../domain/models/currency.model';
export declare class LoadCurrencyByIdAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(_id: string): Promise<CurrencyModel | null>;
}
