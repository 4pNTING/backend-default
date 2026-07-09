import { CreateMenuOptionRequest, CreateMenuOptionResponse, UpdateMenuOptionRequest, DeleteMenuOptionRequest, LoadMenuOptionByItemRequest, LoadMenuOptionByItemResponse, LoadMenuOptionByIdRequest, LoadMenuOptionByIdResponse } from '../models/menu-option.model';
export interface IMenuOptionRepository {
    create(params: CreateMenuOptionRequest): Promise<CreateMenuOptionResponse>;
    update(params: UpdateMenuOptionRequest): Promise<void>;
    delete(params: DeleteMenuOptionRequest): Promise<void>;
    findByMenuItem(params: LoadMenuOptionByItemRequest): Promise<LoadMenuOptionByItemResponse>;
    findById(params: LoadMenuOptionByIdRequest): Promise<LoadMenuOptionByIdResponse | null>;
}
