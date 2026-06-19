import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { CurrencyModel } from '../../domain/models/currency.model';

export class LoadCurrencyByIdUsecase {
    constructor(private readonly currencyRepository: ICurrencyRepository) {}

    async execute(_id: string): Promise<CurrencyModel | null> {
        return await this.currencyRepository.findById(_id);
    }
}
