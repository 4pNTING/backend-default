import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CurrencyUsecasesProxyModule } from '../../usecases-proxy/currency-usecases-proxy.module';
import { CreateCurrencyUsecase } from '../../../usecases/currency/createCurrency.usecase';
import { UpdateCurrencyUsecase } from '../../../usecases/currency/updateCurrency.usecase';
import { DeleteCurrencyUsecase } from '../../../usecases/currency/deleteCurrency.usecase';
import { LoadAllCurrencyUsecase } from '../../../usecases/currency/loadAllCurrency.usecase';
import { LoadCurrencyByIdUsecase } from '../../../usecases/currency/loadCurrencyById.usecase';
import {
    Currency,
    CreateCurrencyDto,
    UpdateCurrencyDto,
    DeleteCurrencyDto,
    LoadCurrencyByIdDto,
    LoadCurrencyResponse,
    LoadCurrencyByIdResponse,
    CreateCurrencyResponse,
    UpdateCurrencyResponse,
    DeleteCurrencyResponse
} from './currency.model';

@Resolver(() => Currency)
export class CurrencyResolver {
    constructor(
        @Inject(CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY)
        private readonly createCurrencyUsecase: CreateCurrencyUsecase,
        @Inject(CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY)
        private readonly updateCurrencyUsecase: UpdateCurrencyUsecase,
        @Inject(CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY)
        private readonly deleteCurrencyUsecase: DeleteCurrencyUsecase,
        @Inject(CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY)
        private readonly loadAllCurrencyUsecase: LoadAllCurrencyUsecase,
        @Inject(CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY)
        private readonly loadCurrencyByIdUsecase: LoadCurrencyByIdUsecase,
    ) {}

    @Query(() => LoadCurrencyResponse, { name: 'loadCurrencies' })
    async loadCurrencies() {
        const result = await this.loadAllCurrencyUsecase.execute({});
        return {
            currency: result.items,
        };
    }

    @Query(() => LoadCurrencyByIdResponse, { name: 'loadCurrencyById' })
    async loadCurrencyById(
        @Args('input') input: LoadCurrencyByIdDto,
    ) {
        const result = await this.loadCurrencyByIdUsecase.execute(input._id);
        if (!result) return { currency: null };
        return { currency: result };
    }

    @Mutation(() => CreateCurrencyResponse)
    async createCurrency(
        @Args('input') input: CreateCurrencyDto,
    ) {
        const result = await this.createCurrencyUsecase.execute(input);
        return { currency: result };
    }

    @Mutation(() => UpdateCurrencyResponse)
    async updateCurrency(
        @Args('input') input: UpdateCurrencyDto,
    ) {
        const result = await this.updateCurrencyUsecase.execute(input._id, input);
        return { currency: result };
    }

    @Mutation(() => DeleteCurrencyResponse)
    async deleteCurrency(
        @Args('input') input: DeleteCurrencyDto,
    ) {
        await this.deleteCurrencyUsecase.execute(input._id);
        return { _id: input._id };
    }
}
