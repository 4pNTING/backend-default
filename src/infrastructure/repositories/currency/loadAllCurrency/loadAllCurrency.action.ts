import { QueryRunner } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { LoadAllCurrencyResponse } from '../../../../domain/models/currency.model';
import { QueryProps } from '../../../../domain/models/query.model';

export class LoadAllCurrencyAction {
  constructor(private readonly session: QueryRunner) { }

  public async execute(query: QueryProps): Promise<LoadAllCurrencyResponse> {
    try {
      const qb = this.session.manager.createQueryBuilder(CurrencyEntity, 'currency');

      // 1. Search (ค้นหาจาก code หรือ name)
      if (query.search?.q) {
        const keyword = `%${query.search.q}%`;
        qb.andWhere(
          `(currency.code LIKE :keyword OR currency.name LIKE :keyword)`,
          { keyword }
        );
      }

      // 1.5 Filter (isActive)
      if (query.isActive !== undefined) {
        qb.andWhere('currency.isActive = :isActive', { isActive: query.isActive });
      }

      // 2. Pagination
      const page = query.paginate?.page || 1;
      const limit = query.paginate?.limit || 10;
      qb.skip((page - 1) * limit).take(limit);

      // 3. Sort
      if (query.sortField) {
        const direction = query.sortDirection === 'ASC' ? 'ASC' : 'DESC';
        qb.orderBy(`currency.${query.sortField}`, direction);
      } else if (query.sort) {
        qb.orderBy('currency._id', query.sort > 0 ? 'ASC' : 'DESC');
      } else {
        qb.orderBy('currency._id', 'DESC'); // Default Sort
      }

      const [entities, total] = await qb.getManyAndCount();

      return { items: entities, total };
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }
}
