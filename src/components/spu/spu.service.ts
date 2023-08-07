import { Injectable } from '@nestjs/common';
import { CreateSpuDto } from './dto/create-spu.dto';
import { UpdateSpuDto } from './dto/update-spu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spu } from './entities/spu.entity';

@Injectable()
export class SpuService {
  constructor(
    @InjectRepository(Spu)
    private readonly spuRepo: Repository<Spu>,
  ) {}
  async create(createSpuDto: CreateSpuDto) {
    const customer = this.spuRepo.create(createSpuDto);
    return this.spuRepo.save(customer);
  }

  findAll() {
    return this.spuRepo.find();
  }

  findOne(id: string) {
    return this.spuRepo.findOneBy({ id });
  }

  update(id: string, updateSpuDto: UpdateSpuDto) {
    return this.spuRepo.update(id, updateSpuDto);
  }

  remove(id: string) {
    return this.spuRepo.softDelete({ id });
  }
}
