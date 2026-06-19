import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { UpdateCurrencyRequest } from '../../../../domain/models/currency.model';
export declare class UpdateCurrencyValidation extends UpdateCurrencyRequest {
    private readonly currencyRepository;
    constructor(currencyRepository: Repository<CurrencyEntity>);
    execute(params: UpdateCurrencyRequest): Promise<void>;
    private validateParams;
}
