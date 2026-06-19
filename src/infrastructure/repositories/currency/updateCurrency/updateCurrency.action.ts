import { QueryRunner } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { UpdateCurrencyRequest, CurrencyModel } from '../../../../domain/models/currency.model';

export class UpdateCurrencyAction {
  constructor(private readonly session: QueryRunner) { }

  public async execute(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel> {
    try {
      const updateData: Partial<CurrencyEntity> = {
        updatedAt: new Date()
      };
      if (params.code !== undefined) updateData.code = params.code;
      if (params.name !== undefined) updateData.name = params.name;
      if (params.isActive !== undefined) updateData.isActive = params.isActive;

      await this.session.manager.update(CurrencyEntity, _id, updateData);

      const updated = await this.session.manager.findOne(CurrencyEntity, {
        where: { _id }
      });
      
      if (!updated) {
        throw new Error(`Currency ID ${_id} not found after update`);
      }
      return updated;
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
