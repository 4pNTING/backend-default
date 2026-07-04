import {Controller,Get,Post,Put,Delete,Body,Param,Inject,HttpCode,HttpStatus} from '@nestjs/common';
import {CreateCurrencyRequest,UpdateCurrencyRequest} from '../../../domain/models/currency.model';
import { CurrencyUsecasesProxyModule } from '../../usecases-proxy/currency-usecases-proxy.module';
import { CreateCurrencyUsecase } from '../../../usecases/currency/createCurrency.usecase';
import { UpdateCurrencyUsecase } from '../../../usecases/currency/updateCurrency.usecase';
import { DeleteCurrencyUsecase } from '../../../usecases/currency/deleteCurrency.usecase';
import { LoadAllCurrencyUsecase } from '../../../usecases/currency/loadAllCurrency.usecase';
import { LoadCurrencyByIdUsecase } from '../../../usecases/currency/loadCurrencyById.usecase';

@Controller('currency')
export class CurrencyController {
    constructor(
        @Inject(CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY)
        private readonly createCurrencyUseCase: CreateCurrencyUsecase,
 
        @Inject(CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY)
        private readonly updateCurrencyUseCase: UpdateCurrencyUsecase,
 
        @Inject(CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY)
        private readonly deleteCurrencyUseCase: DeleteCurrencyUsecase,
 
        @Inject(CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY)
        private readonly loadAllCurrencyUseCase: LoadAllCurrencyUsecase,
 
        @Inject(CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY)
        private readonly loadCurrencyByIdUseCase: LoadCurrencyByIdUsecase,
    ) {}

    @Get()
    async findAll() {
        const result = await this.loadAllCurrencyUseCase.execute({});
        return result.items;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.loadCurrencyByIdUseCase.execute(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateCurrencyRequest) {
        return await this.createCurrencyUseCase.execute(body);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id') id: string,
        @Body() body: Omit<UpdateCurrencyRequest, '_id'>
    ) {
        return await this.updateCurrencyUseCase.execute(id, { _id: id, ...body });
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return await this.deleteCurrencyUseCase.execute(id);
    }
}
