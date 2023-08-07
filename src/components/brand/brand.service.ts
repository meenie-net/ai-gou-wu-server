import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,
  ) {}
  async create(createBrandDto: CreateBrandDto) {
    const customer = this.brandRepo.create(createBrandDto);
    return this.brandRepo.save(customer);
  }

  async findList({ pageSize = 10, pageNum = 1 }) {
    const [result, total] = await this.brandRepo
      .createQueryBuilder()
      .skip((pageNum - 1) * pageSize)
      .take(pageSize || 10)
      .getManyAndCount();
    return { pageSize, pageNum, data: result, total };
  }

  findOne(id: string) {
    return this.brandRepo.findOneBy({ id });
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return this.brandRepo.update(id, updateBrandDto);
  }

  remove(id: string) {
    return this.brandRepo.softDelete({ id });
  }
}
