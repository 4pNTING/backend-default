import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';

// UseCases
import { CreateCustomerUseCase } from '../../usecases/customer/createCustomer.usecase';
import { UpdateCustomerUseCase } from '../../usecases/customer/updateCustomer.usecase';
import { DeleteCustomerUseCase } from '../../usecases/customer/deleteCustomer.usecase';
import { LoadCustomerUseCase } from '../../usecases/customer/loadAllCustomer.usecase';
import { LoadByIDCustomerUseCase } from '../../usecases/customer/loadCustomerById.usecase';
import { RestoreCustomerUseCase } from '../../usecases/customer/restoreCustomer.usecase';

@Module({
  imports: [RepositoriesModule],
})
export class CustomerUsecasesProxyModule {
  static CREATE_CUSTOMER_PROXY = 'CREATE_CUSTOMER_PROXY';
  static UPDATE_CUSTOMER_PROXY = 'UPDATE_CUSTOMER_PROXY';
  static DELETE_CUSTOMER_PROXY = 'DELETE_CUSTOMER_PROXY';
  static LOAD_CUSTOMER_PROXY = 'LOAD_CUSTOMER_PROXY';
  static LOAD_BY_ID_CUSTOMER_PROXY = 'LOAD_BY_ID_CUSTOMER_PROXY';
  static RESTORE_CUSTOMER_PROXY = 'RESTORE_CUSTOMER_PROXY';

  static register(): DynamicModule {
    return {
      module: CustomerUsecasesProxyModule,
      providers: [
        {
          provide: CustomerUsecasesProxyModule.CREATE_CUSTOMER_PROXY,
          useClass: CreateCustomerUseCase,
        },
        {
          provide: CustomerUsecasesProxyModule.UPDATE_CUSTOMER_PROXY,
          useClass: UpdateCustomerUseCase,
        },
        {
          provide: CustomerUsecasesProxyModule.DELETE_CUSTOMER_PROXY,
          useClass: DeleteCustomerUseCase,
        },
        {
          provide: CustomerUsecasesProxyModule.LOAD_CUSTOMER_PROXY,
          useClass: LoadCustomerUseCase,
        },
        {
          provide: CustomerUsecasesProxyModule.LOAD_BY_ID_CUSTOMER_PROXY,
          useClass: LoadByIDCustomerUseCase,
        },
        {
          provide: CustomerUsecasesProxyModule.RESTORE_CUSTOMER_PROXY,
          useClass: RestoreCustomerUseCase,
        },
      ],
      exports: [
        CustomerUsecasesProxyModule.CREATE_CUSTOMER_PROXY,
        CustomerUsecasesProxyModule.UPDATE_CUSTOMER_PROXY,
        CustomerUsecasesProxyModule.DELETE_CUSTOMER_PROXY,
        CustomerUsecasesProxyModule.LOAD_CUSTOMER_PROXY,
        CustomerUsecasesProxyModule.LOAD_BY_ID_CUSTOMER_PROXY,
        CustomerUsecasesProxyModule.RESTORE_CUSTOMER_PROXY,
      ],
    };
  }
}