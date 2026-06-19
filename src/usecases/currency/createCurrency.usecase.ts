import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { CreateCurrencyRequest, CurrencyModel } from '../../domain/models/currency.model';

export class CreateCurrencyUsecase {
    constructor(private readonly currencyRepository: ICurrencyRepository) {}

    async execute(params: CreateCurrencyRequest): Promise<CurrencyModel> {
        return await this.currencyRepository.create(params);
    }
}
