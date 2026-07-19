import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { CustomerModel, CreateCustomerRequest } from '../../domain/models/customer.model';

@Injectable()
export class CreateCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(params: CreateCustomerRequest): Promise<CustomerModel> {
        return await this.customerRepository.create(params);
    }
}