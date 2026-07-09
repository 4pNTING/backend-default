"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseCurrencyRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const currency_entity_1 = require("../../entities/currency.entity");
const createCurrency_action_1 = require("./createCurrency/createCurrency.action");
const createCurrency_validation_1 = require("./createCurrency/createCurrency.validation");
const updateCurrency_action_1 = require("./updateCurrency/updateCurrency.action");
const updateCurrency_validation_1 = require("./updateCurrency/updateCurrency.validation");
const deleteCurrency_action_1 = require("./deleteCurrency/deleteCurrency.action");
const deleteCurrency_validation_1 = require("./deleteCurrency/deleteCurrency.validation");
const loadAllCurrency_action_1 = require("./loadAllCurrency/loadAllCurrency.action");
const loadCurrencyById_action_1 = require("./loadCurrencyById/loadCurrencyById.action");
const loadCurrencyById_validation_1 = require("./loadCurrencyById/loadCurrencyById.validation");
const redis_service_1 = require("../../cache/redis.service");
const cache_keys_constants_1 = require("../../cache/cache-keys.constants");
let DatabaseCurrencyRepository = class DatabaseCurrencyRepository {
    constructor(currencyRepository, dataSource, redisService) {
        this.currencyRepository = currencyRepository;
        this.dataSource = dataSource;
        this.redisService = redisService;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new createCurrency_validation_1.CreateCurrencyValidation(this.currencyRepository).execute(params);
            const result = await new createCurrency_action_1.CreateCurrencyAction(session).execute(params);
            await session.commitTransaction();
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.CURRENCY_LIST_PATTERN);
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async update(_id, params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new updateCurrency_validation_1.UpdateCurrencyValidation(this.currencyRepository).execute({ ...params, _id });
            const result = await new updateCurrency_action_1.UpdateCurrencyAction(session).execute(_id, params);
            await session.commitTransaction();
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.CURRENCY_LIST_PATTERN);
            await this.redisService.del(cache_keys_constants_1.CacheKeys.CURRENCY_BY_ID(_id));
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async delete(_id) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new deleteCurrency_validation_1.DeleteCurrencyValidation(this.currencyRepository).execute(_id);
            await new deleteCurrency_action_1.DeleteCurrencyAction(session).execute(_id);
            await session.commitTransaction();
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.CURRENCY_LIST_PATTERN);
            await this.redisService.del(cache_keys_constants_1.CacheKeys.CURRENCY_BY_ID(_id));
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async findAll(query) {
        const cacheKey = cache_keys_constants_1.CacheKeys.CURRENCY_LIST_QUERY(query);
        const cached = await this.redisService.get(cacheKey);
        if (cached)
            return cached;
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new loadAllCurrency_action_1.LoadAllCurrencyAction(session).execute(query);
            await session.commitTransaction();
            await this.redisService.set(cacheKey, result);
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async findById(_id) {
        const cached = await this.redisService.get(cache_keys_constants_1.CacheKeys.CURRENCY_BY_ID(_id));
        if (cached)
            return cached;
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new loadCurrencyById_validation_1.LoadCurrencyByIdValidation().execute(_id);
            const result = await new loadCurrencyById_action_1.LoadCurrencyByIdAction(session).execute(_id);
            await session.commitTransaction();
            if (result) {
                await this.redisService.set(cache_keys_constants_1.CacheKeys.CURRENCY_BY_ID(_id), result);
            }
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
};
exports.DatabaseCurrencyRepository = DatabaseCurrencyRepository;
exports.DatabaseCurrencyRepository = DatabaseCurrencyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(currency_entity_1.CurrencyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource,
        redis_service_1.RedisService])
], DatabaseCurrencyRepository);
//# sourceMappingURL=currency.repository.js.map