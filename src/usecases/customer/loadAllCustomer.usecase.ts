import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { LoadAllCustomerResponse } from '../../domain/models/customer.model';
import { QueryProps } from '../../domain/models/query.model';

@Injectable()
export class LoadCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(query: QueryProps): Promise<LoadAllCustomerResponse> {
        return await this.customerRepository.findAll(query);
    }
}