import { CreateCurrencyUsecase } from '../../../usecases/currency/createCurrency.usecase';
import { UpdateCurrencyUsecase } from '../../../usecases/currency/updateCurrency.usecase';
import { DeleteCurrencyUsecase } from '../../../usecases/currency/deleteCurrency.usecase';
import { LoadAllCurrencyUsecase } from '../../../usecases/currency/loadAllCurrency.usecase';
import { LoadCurrencyByIdUsecase } from '../../../usecases/currency/loadCurrencyById.usecase';
import { CreateCurrencyDto, UpdateCurrencyDto, DeleteCurrencyDto, LoadCurrencyByIdDto } from './currency.model';
export declare class CurrencyResolver {
    private readonly createCurrencyUsecase;
    private readonly updateCurrencyUsecase;
    private readonly deleteCurrencyUsecase;
    private readonly loadAllCurrencyUsecase;
    private readonly loadCurrencyByIdUsecase;
    constructor(createCurrencyUsecase: CreateCurrencyUsecase, updateCurrencyUsecase: UpdateCurrencyUsecase, deleteCurrencyUsecase: DeleteCurrencyUsecase, loadAllCurrencyUsecase: LoadAllCurrencyUsecase, loadCurrencyByIdUsecase: LoadCurrencyByIdUsecase);
    loadCurrencies(): Promise<{
        currency: import("../../../domain/models/currency.model").CurrencyModel[];
    }>;
    loadCurrencyById(input: LoadCurrencyByIdDto): Promise<{
        currency: import("../../../domain/models/currency.model").CurrencyModel;
    }>;
    createCurrency(input: CreateCurrencyDto): Promise<{
        currency: import("../../../domain/models/currency.model").CurrencyModel;
    }>;
    updateCurrency(input: UpdateCurrencyDto): Promise<{
        currency: import("../../../domain/models/currency.model").CurrencyModel;
    }>;
    deleteCurrency(input: DeleteCurrencyDto): Promise<{
        _id: string;
    }>;
}
