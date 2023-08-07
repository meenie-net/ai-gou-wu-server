import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CouponTypeService } from './coupon-type.service';
import { CreateCouponTypeDto } from './dto/create-coupon-type.dto';
import { UpdateCouponTypeDto } from './dto/update-coupon-type.dto';

@Controller('couponType')
export class CouponTypeController {
  constructor(private readonly couponTypeService: CouponTypeService) {}

  @Post()
  create(@Body() createCouponTypeDto: CreateCouponTypeDto) {
    return this.couponTypeService.create(createCouponTypeDto);
  }

  @Get()
  findAll() {
    return this.couponTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCouponTypeDto: UpdateCouponTypeDto,
  ) {
    return this.couponTypeService.update(id, updateCouponTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponTypeService.remove(id);
  }
}
