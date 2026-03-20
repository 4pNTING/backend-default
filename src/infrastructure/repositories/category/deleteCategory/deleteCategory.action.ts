import { QueryRunner } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { DeleteCategoryRequest } from '@domain/models/category.model';

export class DeleteCategoryAction {
  constructor(private readonly session: QueryRunner) {}

  public async execute(_id: string): Promise<void> {
    try {
      // ถ้าจะทำ Soft Delete ให้ใช้ .update({ isActive: false }) แทน .delete()
      // แต่ในตัวอย่างนี้ผมทำ Hard Delete ตามพื้นฐานก่อนนะครับ
      await this.session.manager.softDelete(CategoryEntity, _id);
    } catch (error) {
      console.error('ERROR DeleteCategoryAction', error?.message);
      throw error instanceof Error ? error : new Error(error?.message);
    }
  }
}