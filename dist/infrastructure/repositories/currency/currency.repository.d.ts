import { DataSource, Repository } from 'typeorm';
import { CurrencyEntity } from '../../entities/currency.entity';
import { ICurrencyRepository } from '../../../domain/repositories/currency.repository.interface';
import { CurrencyModel, CreateCurrencyRequest, UpdateCurrencyRequest, LoadAllCurrencyResponse } from '../../../domain/models/currency.model';
import { QueryProps } from '../../../domain/models/query.model';
import { RedisService } from '../../cache/redis.service';
export declare class DatabaseCurrencyRepository implements ICurrencyRepository {
    private readonly currencyRepository;
    private readonly dataSource;
    private readonly redisService;
    constructor(currencyRepository: Repository<CurrencyEntity>, dataSource: DataSource, redisService: RedisService);
    create(params: CreateCurrencyRequest): Promise<CurrencyModel>;
    update(_id: string, params: UpdateCurrencyRequest): Promise<CurrencyModel>;
    delete(_id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllCurrencyResponse>;
    findById(_id: string): Promise<CurrencyModel | null>;
}
