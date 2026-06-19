import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { CreateCurrencyRequest } from '../../../../domain/models/currency.model';
export declare class CreateCurrencyValidation extends CreateCurrencyRequest {
    private readonly currencyRepository;
    constructor(currencyRepository: Repository<CurrencyEntity>);
    execute(params: CreateCurrencyRequest): Promise<void>;
    private buildParams;
    private validateParams;
}
