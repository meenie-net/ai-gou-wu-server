import { Injectable } from '@nestjs/common';
import { CreateCouponTypeDto } from './dto/create-coupon-type.dto';
import { UpdateCouponTypeDto } from './dto/update-coupon-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponType } from './entities/coupon-type.entity';

@Injectable()
export class CouponTypeService {
  constructor(
    @InjectRepository(CouponType)
    private readonly couponTypeRepo: Repository<CouponType>,
  ) {}
  async create(createCouponTypeDto: CreateCouponTypeDto) {
    const customer = this.couponTypeRepo.create(createCouponTypeDto);
    return this.couponTypeRepo.save(customer);
  }

  findAll() {
    return this.couponTypeRepo.find();
  }

  findOne(id: string) {
    return this.couponTypeRepo.findOneBy({ id });
  }

  update(id: string, updateCouponTypeDto: UpdateCouponTypeDto) {
    return this.couponTypeRepo.update(id, updateCouponTypeDto);
  }

  remove(id: string) {
    return this.couponTypeRepo.softDelete({ id });
  }
}
