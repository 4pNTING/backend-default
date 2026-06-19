import { ICurrencyRepository } from '../../domain/repositories/currency.repository.interface';

export class DeleteCurrencyUsecase {
    constructor(private readonly currencyRepository: ICurrencyRepository) {}

    async execute(_id: string): Promise<void> {
        return await this.currencyRepository.delete(_id);
    }
}
