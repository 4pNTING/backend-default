import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CustomerEntity } from '@infrastructure/entities/customer.entity';
import { ICustomerRepository } from '@domain/repositories/customer.repository.interface';
import {
  CustomerModel,
  CreateCustomerRequest,
  CreateCustomerResponse,
  UpdateCustomerRequest,
  DeleteCustomerRequest,
  LoadAllCustomerResponse,
  LoadCustomerByIdRequest,
  LoadCustomerByIdResponse
} from '@domain/models/customer.model';
import { QueryProps } from '@domain/models/query.model';
import { RedisService } from '../../cache/redis.service';
import { CacheKeys } from '../../cache/cache-keys.constants';

@Injectable()
export class DatabaseCustomerRepository implements ICustomerRepository {
  private readonly logger = new Logger(DatabaseCustomerRepository.name);

  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerEntity: Repository<CustomerEntity>,
    private readonly dataSource: DataSource,
    private readonly redisService: RedisService,
  ) { }

  async create(params: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      const entity = session.manager.create(CustomerEntity, {
        firstName: params.firstName,
        lastName: params.lastName,
        phoneNumber: params.phoneNumber,
        gender: params.gender,
        nationality: params.nationality,
        province: params.province,
        district: params.district,
        village: params.village,
        fileUrl: params.fileUrl,
        isActive: params.isActive,
        contact: params.contact,
      });
      const saved = await session.manager.save(CustomerEntity, entity);
      await session.commitTransaction();
      await this.redisService.delByPattern(CacheKeys.CUSTOMER_LIST_PATTERN);
      return saved as any;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async update(params: UpdateCustomerRequest): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await session.manager.update(CustomerEntity, params._id, {
        firstName: params.firstName,
        lastName: params.lastName,
        phoneNumber: params.phoneNumber,
        gender: params.gender,
        nationality: params.nationality,
        province: params.province,
        district: params.district,
        village: params.village,
        fileUrl: params.fileUrl,
        isActive: params.isActive,
        contact: params.contact,
        updatedAt: new Date(),
      });
      await session.commitTransaction();
      await this.redisService.delByPattern(CacheKeys.CUSTOMER_LIST_PATTERN);
      if (params._id) {
        await this.redisService.del(CacheKeys.CUSTOMER_BY_ID(params._id));
      }
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async delete(params: DeleteCustomerRequest): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await session.manager.softDelete(CustomerEntity, params._id);
      await session.commitTransaction();
      await this.redisService.delByPattern(CacheKeys.CUSTOMER_LIST_PATTERN);
      await this.redisService.del(CacheKeys.CUSTOMER_BY_ID(params._id));
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async restore(_id: string): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await session.manager.restore(CustomerEntity, _id);
      await session.commitTransaction();
      await this.redisService.delByPattern(CacheKeys.CUSTOMER_LIST_PATTERN);
      await this.redisService.del(CacheKeys.CUSTOMER_BY_ID(_id));
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findAll(query: QueryProps): Promise<LoadAllCustomerResponse> {
    const cacheKey = CacheKeys.CUSTOMER_LIST_QUERY(query);
    const cached = await this.redisService.get<LoadAllCustomerResponse>(cacheKey);
    if (cached) return cached;

    const session = this.dataSource.createQueryRunner();
    await session.connect();
    try {
      const qb = session.manager.createQueryBuilder(CustomerEntity, 'customer');

      if (query.search?.q) {
        const keyword = `%${query.search.q}%`;
        qb.andWhere(
          `(customer.firstName LIKE :keyword OR customer.lastName LIKE :keyword OR customer.phoneNumber LIKE :keyword)`,
          { keyword }
        );
      }

      if (query.isActive !== undefined) {
        qb.andWhere('customer.isActive = :isActive', { isActive: query.isActive });
      }

      const page = query.paginate?.page || 1;
      const limit = query.paginate?.limit || 10;
      qb.skip((page - 1) * limit).take(limit);

      if (query.sortField) {
        const direction = query.sortDirection === 'ASC' ? 'ASC' : 'DESC';
        qb.orderBy(`customer.${query.sortField}`, direction);
      } else {
        qb.orderBy('customer.createdAt', 'DESC');
      }

      const [items, total] = await qb.getManyAndCount();
      const result = { items, total };
      await this.redisService.set(cacheKey, result);
      return result;
    } finally {
      await session.release();
    }
  }

  async findById(params: LoadCustomerByIdRequest): Promise<LoadCustomerByIdResponse | null> {
    const cached = await this.redisService.get<LoadCustomerByIdResponse>(CacheKeys.CUSTOMER_BY_ID(params._id));
    if (cached) return cached;

    const session = this.dataSource.createQueryRunner();
    await session.connect();
    try {
      const result = await session.manager.findOne(CustomerEntity, { where: { _id: params._id } });
      if (result) {
        await this.redisService.set(CacheKeys.CUSTOMER_BY_ID(params._id), result);
      }
      return result as any;
    } finally {
      await session.release();
    }
  }

  async findByPhoneNumber(phoneNumber: string): Promise<CustomerModel | null> {
    const entity = await this.customerEntity.findOne({ where: { phoneNumber } });
    return entity as any;
  }
}