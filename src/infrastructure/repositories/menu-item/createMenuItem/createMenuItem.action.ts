import { QueryRunner } from 'typeorm';
import { MenuItemEntity } from '@infrastructure/entities/menu-item.entity';
import { MenuItemModel, CreateMenuItemRequest, CreateMenuItemResponse } from '@domain/models/menu-item.model';
import { ActiveStatus } from '@domain/enums/enum';

export class CreateMenuItemAction extends MenuItemModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateMenuItemRequest): Promise<CreateMenuItemResponse> {
        try {
            await this.build(params);
            await this.persist();
            return this.buildResponse();
        } catch (error) {
            console.error('ERROR CreateMenuItemAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }

    private async build(params: CreateMenuItemRequest): Promise<void> {
        this.name        = params.name;
        this.description = params.description;
        this.photo       = params.photo;
        this.price       = params.price;
        this.categoryId  = params.categoryId;
        this.isActive    = params.isActive ?? ActiveStatus.active;
    }

    private async persist(): Promise<void> {
        try {
            const entity = this.session.manager.create(MenuItemEntity, {
                name:        this.name,
                description: this.description,
                photo:       this.photo,
                price:       this.price,
                categoryId:  this.categoryId,
                isActive:    this.isActive,
            });
            const saved = await this.session.manager.save(MenuItemEntity, entity);
            if (saved) {
                this._id = (saved as any)._id;
            } else {
                throw new Error('Failed to save menu item');
            }
        } catch (error) {
            throw new Error(`Failed to persist menu item: ${error?.message}`);
        }
    }

    private buildResponse(): CreateMenuItemResponse {
        return {
            _id:         this._id,
            name:        this.name,
            description: this.description,
            photo:       this.photo,
            price:       this.price,
            categoryId:  this.categoryId,
            isActive:    this.isActive,
        };
    }
}
