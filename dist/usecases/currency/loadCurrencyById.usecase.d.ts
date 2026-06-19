import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { CurrencyModel } from '../../domain/models/currency.model';
export declare class LoadCurrencyByIdUsecase {
    private readonly currencyRepository;
    constructor(currencyRepository: ICurrencyRepository);
    execute(_id: string): Promise<CurrencyModel | null>;
}
