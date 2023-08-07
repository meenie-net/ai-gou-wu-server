import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const customer = this.categoryRepo.create(createCategoryDto);
    return this.categoryRepo.save(customer);
  }

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: string) {
    return this.categoryRepo.findOneBy({ id });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepo.update(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoryRepo.softDelete({ id });
  }
}
