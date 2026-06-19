import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';
import { LoadAllCurrencyResponse } from '../../domain/models/currency.model';
import { QueryProps } from '../../domain/models/query.model';

export class LoadAllCurrencyUsecase {
    constructor(private readonly currencyRepository: ICurrencyRepository) {}

    async execute(query: QueryProps): Promise<LoadAllCurrencyResponse> {
        return await this.currencyRepository.findAll(query);
    }
}
