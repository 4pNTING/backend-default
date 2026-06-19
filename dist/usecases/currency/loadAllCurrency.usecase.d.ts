import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { LoadAllCurrencyResponse } from '../../domain/models/currency.model';
import { QueryProps } from '../../domain/models/query.model';
export declare class LoadAllCurrencyUsecase {
    private readonly currencyRepository;
    constructor(currencyRepository: ICurrencyRepository);
    execute(query: QueryProps): Promise<LoadAllCurrencyResponse>;
}
