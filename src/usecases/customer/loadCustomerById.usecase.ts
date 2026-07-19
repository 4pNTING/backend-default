import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { LoadCustomerByIdRequest, LoadCustomerByIdResponse } from '../../domain/models/customer.model';

@Injectable()
export class LoadByIDCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(params: LoadCustomerByIdRequest): Promise<LoadCustomerByIdResponse | null> {
        return await this.customerRepository.findById(params);
    }
}