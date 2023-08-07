import { Injectable } from '@nestjs/common';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sku } from './entities/sku.entity';

@Injectable()
export class SkuService {
  constructor(
    @InjectRepository(Sku)
    private readonly skuRepo: Repository<Sku>,
  ) {}
  async create(createSkuDto: CreateSkuDto) {
    const customer = this.skuRepo.create(createSkuDto);
    return this.skuRepo.save(customer);
  }

  findAll() {
    return this.skuRepo.find();
  }

  findOne(id: string) {
    return this.skuRepo.findOneBy({ id });
  }

  update(id: string, updateSkuDto: UpdateSkuDto) {
    return this.skuRepo.update(id, updateSkuDto);
  }

  remove(id: string) {
    return this.skuRepo.softDelete({ id });
  }
}
