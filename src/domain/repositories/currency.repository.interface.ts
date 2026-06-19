import { CurrencyModel, CreateCurrencyRequest, UpdateCurrencyRequest, LoadAllCurrencyResponse } from '../models/currency.model';
import { QueryProps } from '../models/query.model';

export interface ICurrencyRepository {
    create(params: CreateCurrencyRequest): Promise<CurrencyModel>;
    update(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel>;
    delete(_id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllCurrencyResponse>;
    findById(_id: string): Promise<CurrencyModel | null>;
}
