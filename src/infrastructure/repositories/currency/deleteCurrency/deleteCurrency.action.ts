import { QueryRunner } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';

export class DeleteCurrencyAction {
  constructor(private readonly session: QueryRunner) { }

  public async execute(_id: string): Promise<void> {
    try {
      await this.session.manager.delete(CurrencyEntity, _id);
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
