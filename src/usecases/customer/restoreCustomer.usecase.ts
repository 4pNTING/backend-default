import { Injectable } from '@nestjs/common';
import { DatabaseCustomerRepository } from '../../infrastructure/repositories/customer/customer.repository';
import { CustomerModel } from '../../domain/models/customer.model';

@Injectable()
export class RestoreCustomerUseCase {
    constructor(private readonly customerRepository: DatabaseCustomerRepository) { }

    async execute(_id: string): Promise<CustomerModel> {
        await this.customerRepository.restore(_id);
        return await this.customerRepository.findById({ _id });
    }
}