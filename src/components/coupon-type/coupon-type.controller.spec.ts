import { Test, TestingModule } from '@nestjs/testing';
import { CouponTypeController } from './coupon-type.controller';
import { CouponTypeService } from './coupon-type.service';

describe('CouponTypeController', () => {
  let controller: CouponTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponTypeController],
      providers: [CouponTypeService],
    }).compile();

    controller = module.get<CouponTypeController>(CouponTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
