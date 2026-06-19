import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { UpdateCurrencyRequest, CurrencyModel } from '../../domain/models/currency.model';

export class UpdateCurrencyUsecase {
    constructor(private readonly currencyRepository: ICurrencyRepository) {}

    async execute(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel> {
        return await this.currencyRepository.update(_id, params);
    }
}
