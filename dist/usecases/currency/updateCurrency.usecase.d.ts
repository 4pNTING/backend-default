import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { UpdateCurrencyRequest, CurrencyModel } from '../../domain/models/currency.model';
export declare class UpdateCurrencyUsecase {
    private readonly currencyRepository;
    constructor(currencyRepository: ICurrencyRepository);
    execute(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel>;
}
