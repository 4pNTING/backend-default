import { Repository, Not } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { UpdateCurrencyRequest } from '../../../../domain/models/currency.model';

export class UpdateCurrencyValidation extends UpdateCurrencyRequest {
  constructor(private readonly currencyRepository: Repository<CurrencyEntity>) {
    super();
  }

  public async execute(params: UpdateCurrencyRequest): Promise<void> {
    try {
      this._id = params._id;
      this.code = params.code;
      this.name = params.name;
      this.isActive = params.isActive;
      await this.validateParams();
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  private async validateParams(): Promise<void> {
    try {
      if (!this._id) {
        throw new Error('Currency ID is required');
      }

      const exist = await this.currencyRepository.findOne({ where: { _id: this._id } });
      if (!exist) {
        throw new Error(`Currency ID ${this._id} not found`);
      }

      if (this.code) {
        const duplicate = await this.currencyRepository.findOne({
          where: {
            code: this.code,
            _id: Not(this._id)
          }
        });

        if (duplicate) {
          throw new Error('Currency code already exists.');
        }
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
