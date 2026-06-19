import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { CreateCurrencyRequest, CurrencyModel } from '../../domain/models/currency.model';
export declare class CreateCurrencyUsecase {
    private readonly currencyRepository;
    constructor(currencyRepository: ICurrencyRepository);
    execute(params: CreateCurrencyRequest): Promise<CurrencyModel>;
}
