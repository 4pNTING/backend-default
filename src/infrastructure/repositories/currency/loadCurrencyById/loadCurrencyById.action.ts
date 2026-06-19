import { QueryRunner } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { CurrencyModel } from '../../../../domain/models/currency.model';

export class LoadCurrencyByIdAction {
  constructor(private readonly session: QueryRunner) { }

  public async execute(_id: string): Promise<CurrencyModel | null> {
    try {
      const entity = await this.session.manager.findOne(CurrencyEntity, {
        where: { _id }
      });
      return entity;
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
