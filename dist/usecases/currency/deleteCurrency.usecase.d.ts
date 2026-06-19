import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
export declare class DeleteCurrencyUsecase {
    private readonly currencyRepository;
    constructor(currencyRepository: ICurrencyRepository);
    execute(_id: string): Promise<void>;
}
