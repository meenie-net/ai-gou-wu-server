import { Module } from '@nestjs/common';
import { CouponTypeService } from './coupon-type.service';
import { CouponTypeController } from './coupon-type.controller';
import { CouponType } from './entities/coupon-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CouponType])],
  controllers: [CouponTypeController],
  providers: [CouponTypeService],
})
export class CouponTypeModule {}
