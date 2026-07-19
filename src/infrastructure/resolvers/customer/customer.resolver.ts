import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, Logger, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    Customer,
    LoadCustomerResponse,
    LoadCustomerByIdResponse,
    CreateCustomerDto,
    UpdateCustomerDto,
    LoadCustomerDto,
    LoadCustomerByIdDto,
    DeleteCustomerDto,
    RestoreCustomerDto,
    CreateCustomerResponse,
    UpdateCustomerResponse,
    DeleteCustomerResponse,
    RestoreCustomerResponse,
    ActiveStatus
} from './customer.model';
import { CustomerUsecasesProxyModule } from '../../usecases-proxy/customer-usecases-proxy.module';
import { CreateCustomerUseCase } from '../../../usecases/customer/createCustomer.usecase';
import { UpdateCustomerUseCase } from '../../../usecases/customer/updateCustomer.usecase';
import { DeleteCustomerUseCase } from '../../../usecases/customer/deleteCustomer.usecase';
import { LoadCustomerUseCase } from '../../../usecases/customer/loadAllCustomer.usecase';
import { LoadByIDCustomerUseCase } from '../../../usecases/customer/loadCustomerById.usecase';
import { RestoreCustomerUseCase } from '../../../usecases/customer/restoreCustomer.usecase';

@Resolver(() => Customer)
@UseGuards(JwtAuthGuard)
export class CustomerResolver {
    private readonly logger = new Logger(CustomerResolver.name);

    constructor(
        @Inject(CustomerUsecasesProxyModule.CREATE_CUSTOMER_PROXY)
        private readonly createCustomerUseCase: CreateCustomerUseCase,

        @Inject(CustomerUsecasesProxyModule.UPDATE_CUSTOMER_PROXY)
        private readonly updateCustomerUseCase: UpdateCustomerUseCase,

        @Inject(CustomerUsecasesProxyModule.DELETE_CUSTOMER_PROXY)
        private readonly deleteCustomerUseCase: DeleteCustomerUseCase,

        @Inject(CustomerUsecasesProxyModule.LOAD_CUSTOMER_PROXY)
        private readonly loadCustomerUseCase: LoadCustomerUseCase,

        @Inject(CustomerUsecasesProxyModule.LOAD_BY_ID_CUSTOMER_PROXY)
        private readonly loadCustomerByIdUseCase: LoadByIDCustomerUseCase,

        @Inject(CustomerUsecasesProxyModule.RESTORE_CUSTOMER_PROXY)
        private readonly restoreCustomerUseCase: RestoreCustomerUseCase,
    ) { }

    // ==============================
    // QUERY
    // ==============================

    @Query(() => LoadCustomerResponse, { name: 'loadCustomer' })
    async loadCustomer(
        @Args('input', { nullable: true }) input: LoadCustomerDto
    ) {
        const query: any = {};

        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page,
                    limit: input.limit
                };
            }
            if (input.keyword) {
                query.search = { q: input.keyword };
            }
            if (input.isActive) {
                query.isActive = input.isActive;
            }
            if (input.sortField) {
                query.sortField = input.sortField;
            }
            if (input.sortDirection) {
                query.sortDirection = input.sortDirection;
            }
        }

        const result = await this.loadCustomerUseCase.execute(query);
        return {
            customer: result.items,
            count: result.total,
        };
    }

    @Query(() => LoadCustomerByIdResponse, { name: 'loadCustomerById', nullable: true })
    async loadCustomerById(
        @Args('input') input: LoadCustomerByIdDto
    ) {
        const result = await this.loadCustomerByIdUseCase.execute({ _id: input._id });
        if (!result) return { customer: null };
        return { customer: result };
    }

    // ==============================
    // MUTATION
    // ==============================

    @Mutation(() => CreateCustomerResponse)
    async createCustomer(
        @Args('input') input: CreateCustomerDto
    ) {
        const result = await this.createCustomerUseCase.execute(input);
        return { customer: result };
    }

    @Mutation(() => UpdateCustomerResponse)
    async updateCustomer(
        @Args('input') input: UpdateCustomerDto
    ) {
        await this.updateCustomerUseCase.execute(input);
        const updated = await this.loadCustomerByIdUseCase.execute({ _id: input._id });
        return { customer: updated };
    }

    @Mutation(() => DeleteCustomerResponse)
    async deleteCustomer(
        @Args('input') input: DeleteCustomerDto
    ) {
        await this.deleteCustomerUseCase.execute(input);
        return { customer: { _id: input._id } };
    }

    @Mutation(() => RestoreCustomerResponse)
    async restoreCustomer(
        @Args('input') input: RestoreCustomerDto
    ) {
        const result = await this.restoreCustomerUseCase.execute(input._id);
        return { customer: result };
    }
}