import { QueryRunner } from 'typeorm';
import { CurrencyEntity } from '../../../entities/currency.entity';
import { CurrencyModel, CreateCurrencyRequest } from '../../../../domain/models/currency.model';
import { ActiveStatus } from '../../../../domain/enums/enum';

export class CreateCurrencyAction extends CurrencyModel {
  constructor(private readonly session: QueryRunner) {
    super();
  }

  public async execute(params: CreateCurrencyRequest): Promise<CurrencyModel> {
    try {
      await this.validateAndBuildParams(params);
      await this.persistCurrency();

      return this.buildResponse();
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }

  /**
   * Worker 1: Validate and build parameters
   */
  private async validateAndBuildParams(params: CreateCurrencyRequest): Promise<void> {
    try {
      this.code = params.code;
      this.name = params.name;
      this.isActive = params.isActive ?? ActiveStatus.active;

      this.createdAt = new Date();
      this.updatedAt = new Date();
    } catch (error) {
      throw new Error(`Failed to build parameters: ${(error as any)?.message}`);
    }
  }

  /**
   * Worker 2: Persist to database
   */
  private async persistCurrency(): Promise<void> {
    try {
      const entity = this.session.manager.create(CurrencyEntity, {
        code: this.code,
        name: this.name,
        isActive: this.isActive,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      });
      const savedEntity = await this.session.manager.save(CurrencyEntity, entity);

      if (savedEntity) {
        this._id = savedEntity._id;
      } else {
        throw new Error('Failed to save currency into database');
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error((error as any)?.message);
    }
  }

  /**
   * Worker 3: Build response object
   */
  private buildResponse(): CurrencyModel {
    try {
      return {
        _id: this._id,
        code: this.code,
        name: this.name,
        isActive: this.isActive,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      };
    } catch (error) {
      throw new Error(`Failed to build response: ${(error as any)?.message}`);
    }
  }
}
