import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { CreateCurrencyRequest } from '../../../../domain/models/currency.model';

export class CreateCurrencyValidation extends CreateCurrencyRequest {
  constructor(private readonly currencyRepository: Repository<CurrencyEntity>) {
    super();
  }

  public async execute(params: CreateCurrencyRequest): Promise<void> {
    try {
      await this.buildParams(params);
      await this.validateParams();
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  private async buildParams(params: CreateCurrencyRequest): Promise<void> {
    try {
      this.code = params.code;
      this.name = params.name;
      this.isActive = params.isActive;
    } catch (error) {
      throw new Error((error as any)?.message || 'Unknown error');
    }
  }

  private async validateParams(): Promise<void> {
    try {
      if (!this.code || this.code.trim() === '') {
        throw new Error('Currency code is required');
      }
      if (!this.name || this.name.trim() === '') {
        throw new Error('Currency name is required');
      }

      const exist = await this.currencyRepository.findOne({ 
        where: { code: this.code } 
      });
      
      if (exist) {
        throw new Error('Currency code already exists.');
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
