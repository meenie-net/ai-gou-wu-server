import { Injectable } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
  ) {}
  async create(createCouponDto: CreateCouponDto) {
    const customer = this.couponRepo.create(createCouponDto);
    return this.couponRepo.save(customer);
  }

  findAll() {
    return this.couponRepo.find();
  }

  findOne(id: string) {
    return this.couponRepo.findOneBy({ id });
  }

  update(id: string, updateCouponDto: UpdateCouponDto) {
    return this.couponRepo.update(id, updateCouponDto);
  }

  remove(id: string) {
    return this.couponRepo.softDelete({ id });
  }
}
