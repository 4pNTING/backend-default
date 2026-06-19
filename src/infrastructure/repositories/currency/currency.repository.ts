import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CurrencyEntity } from '../../entities/currency.entity';
import { ICurrencyRepository } from '../../../domain/repositories/currency.repository.interface';
import { CurrencyModel, CreateCurrencyRequest, UpdateCurrencyRequest, LoadAllCurrencyResponse } from '../../../domain/models/currency.model';
import { QueryProps } from '../../../domain/models/query.model';

// Import Actions & Validations
import { CreateCurrencyAction } from './createCurrency/createCurrency.action';
import { CreateCurrencyValidation } from './createCurrency/createCurrency.validation';

import { UpdateCurrencyAction } from './updateCurrency/updateCurrency.action';
import { UpdateCurrencyValidation } from './updateCurrency/updateCurrency.validation';

import { DeleteCurrencyAction } from './deleteCurrency/deleteCurrency.action';
import { DeleteCurrencyValidation } from './deleteCurrency/deleteCurrency.validation';

import { LoadAllCurrencyAction } from './loadAllCurrency/loadAllCurrency.action';

import { LoadCurrencyByIdAction } from './loadCurrencyById/loadCurrencyById.action';
import { LoadCurrencyByIdValidation } from './loadCurrencyById/loadCurrencyById.validation';

// Redis Cache
import { RedisService } from '../../cache/redis.service';
import { CacheKeys } from '../../cache/cache-keys.constants';

@Injectable()
export class DatabaseCurrencyRepository implements ICurrencyRepository {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
    private readonly dataSource: DataSource,
    private readonly redisService: RedisService,
  ) {}

  async create(params: CreateCurrencyRequest): Promise<CurrencyModel> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new CreateCurrencyValidation(this.currencyRepository).execute(params);
      const result = await new CreateCurrencyAction(session).execute(params);
      await session.commitTransaction();

      // Invalidate list cache (ข้อมูลเปลี่ยน ต้อง re-fetch)
      await this.redisService.del(CacheKeys.CURRENCY_LIST);

      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async update(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new UpdateCurrencyValidation(this.currencyRepository).execute({ ...params, _id });
      const result = await new UpdateCurrencyAction(session).execute(_id, params);
      await session.commitTransaction();

      // Invalidate ทั้ง list cache และ cache ของ item นี้
      await this.redisService.del(CacheKeys.CURRENCY_LIST);
      await this.redisService.del(CacheKeys.CURRENCY_BY_ID(_id));

      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async delete(_id: string): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new DeleteCurrencyValidation(this.currencyRepository).execute(_id);
      await new DeleteCurrencyAction(session).execute(_id);
      await session.commitTransaction();

      // Invalidate ทั้ง list cache และ cache ของ item นี้
      await this.redisService.del(CacheKeys.CURRENCY_LIST);
      await this.redisService.del(CacheKeys.CURRENCY_BY_ID(_id));
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findAll(query: QueryProps): Promise<LoadAllCurrencyResponse> {
    // Cache-Aside: ลองอ่านจาก cache ก่อน
    const cached = await this.redisService.get<LoadAllCurrencyResponse>(CacheKeys.CURRENCY_LIST);
    if (cached) return cached;

    // Cache MISS → query จาก Database
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      const result = await new LoadAllCurrencyAction(session).execute(query);
      await session.commitTransaction();

      // เก็บผลลง cache สำหรับครั้งถัดไป
      await this.redisService.set(CacheKeys.CURRENCY_LIST, result);

      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findById(_id: string): Promise<CurrencyModel | null> {
    // Cache-Aside: ลองอ่านจาก cache ก่อน
    const cached = await this.redisService.get<CurrencyModel>(CacheKeys.CURRENCY_BY_ID(_id));
    if (cached) return cached;

    // Cache MISS → query จาก Database
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new LoadCurrencyByIdValidation().execute(_id);
      const result = await new LoadCurrencyByIdAction(session).execute(_id);
      await session.commitTransaction();

      // เก็บผลลง cache (เฉพาะเมื่อมีข้อมูล)
      if (result) {
        await this.redisService.set(CacheKeys.CURRENCY_BY_ID(_id), result);
      }

      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }
}
