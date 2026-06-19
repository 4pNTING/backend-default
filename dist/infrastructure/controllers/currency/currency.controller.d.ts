import { CreateCurrencyRequest, UpdateCurrencyRequest } from '../../../domain/models/currency.model';
import { CreateCurrencyUsecase } from '../../../usecases/currency/createCurrency.usecase';
import { UpdateCurrencyUsecase } from '../../../usecases/currency/updateCurrency.usecase';
import { DeleteCurrencyUsecase } from '../../../usecases/currency/deleteCurrency.usecase';
import { LoadAllCurrencyUsecase } from '../../../usecases/currency/loadAllCurrency.usecase';
import { LoadCurrencyByIdUsecase } from '../../../usecases/currency/loadCurrencyById.usecase';
export declare class CurrencyController {
    private readonly createCurrencyUseCase;
    private readonly updateCurrencyUseCase;
    private readonly deleteCurrencyUseCase;
    private readonly loadAllCurrencyUseCase;
    private readonly loadCurrencyByIdUseCase;
    constructor(createCurrencyUseCase: CreateCurrencyUsecase, updateCurrencyUseCase: UpdateCurrencyUsecase, deleteCurrencyUseCase: DeleteCurrencyUsecase, loadAllCurrencyUseCase: LoadAllCurrencyUsecase, loadCurrencyByIdUseCase: LoadCurrencyByIdUsecase);
    findAll(): Promise<import("../../../domain/models/currency.model").CurrencyModel[]>;
    findOne(id: string): Promise<import("../../../domain/models/currency.model").CurrencyModel>;
    create(body: CreateCurrencyRequest): Promise<import("../../../domain/models/currency.model").CurrencyModel>;
    update(id: string, body: Omit<UpdateCurrencyRequest, '_id'>): Promise<import("../../../domain/models/currency.model").CurrencyModel>;
    delete(id: string): Promise<void>;
}
