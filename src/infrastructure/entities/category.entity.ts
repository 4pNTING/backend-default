import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { CategoryModel } from '../../domain/models/category.model';
import { ProductEntity } from './product.entity';

@Entity('categories')
export class CategoryEntity implements CategoryModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => ProductEntity, product => product.category)
  products: ProductEntity[];


}