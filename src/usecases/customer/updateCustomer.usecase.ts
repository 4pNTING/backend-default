import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { UpdateCustomerRequest } from '../../domain/models/customer.model';

@Injectable()
export class UpdateCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(params: UpdateCustomerRequest): Promise<void> {
        await this.customerRepository.update(params);
    }
}