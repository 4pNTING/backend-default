import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';

export class DeleteCurrencyValidation {
  constructor(private readonly currencyRepository: Repository<CurrencyEntity>) { }

  public async execute(_id: string): Promise<void> {
    try {
      if (!_id) {
        throw new Error('Currency ID is required');
      }

      const exist = await this.currencyRepository.findOne({ where: { _id } });
      if (!exist) {
        throw new Error(`Currency ID ${_id} not found`);
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }
}
