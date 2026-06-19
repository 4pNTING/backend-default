import { QueryRunner } from 'typeorm';
import { LoadAllCurrencyResponse } from '../../../../domain/models/currency.model';
import { QueryProps } from '../../../../domain/models/query.model';
export declare class LoadAllCurrencyAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllCurrencyResponse>;
}
