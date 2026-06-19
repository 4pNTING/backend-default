import { QueryRunner } from 'typeorm';
import { CurrencyModel, CreateCurrencyRequest } from '../../../../domain/models/currency.model';
export declare class CreateCurrencyAction extends CurrencyModel {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: CreateCurrencyRequest): Promise<CurrencyModel>;
    private validateAndBuildParams;
    private persistCurrency;
    private buildResponse;
}
