import { QueryProps } from '../models/query.model';
import { CreateMenuItemRequest, CreateMenuItemResponse, UpdateMenuItemRequest, DeleteMenuItemRequest, LoadAllMenuItemResponse, LoadMenuItemByIdRequest, LoadMenuItemByIdResponse, LoadMenuItemByCategoryRequest, LoadMenuItemByCategoryResponse } from '../models/menu-item.model';
export interface IMenuItemRepository {
    create(params: CreateMenuItemRequest): Promise<CreateMenuItemResponse>;
    update(params: UpdateMenuItemRequest): Promise<void>;
    delete(params: DeleteMenuItemRequest): Promise<void>;
    restore(_id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllMenuItemResponse>;
    findById(params: LoadMenuItemByIdRequest): Promise<LoadMenuItemByIdResponse | null>;
    findByCategory(params: LoadMenuItemByCategoryRequest): Promise<LoadMenuItemByCategoryResponse>;
    findByName(name: string): Promise<LoadMenuItemByIdResponse | null>;
}
