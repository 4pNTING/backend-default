import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { DeleteCustomerRequest } from '../../domain/models/customer.model';

@Injectable()
export class DeleteCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(params: DeleteCustomerRequest): Promise<void> {
        await this.customerRepository.delete(params);
    }
}