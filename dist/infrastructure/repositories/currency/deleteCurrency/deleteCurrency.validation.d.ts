import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
export declare class DeleteCurrencyValidation {
    private readonly currencyRepository;
    constructor(currencyRepository: Repository<CurrencyEntity>);
    execute(_id: string): Promise<void>;
}
