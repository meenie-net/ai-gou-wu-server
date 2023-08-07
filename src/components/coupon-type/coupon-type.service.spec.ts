import { Test, TestingModule } from '@nestjs/testing';
import { CouponTypeService } from './coupon-type.service';

describe('CouponTypeService', () => {
  let service: CouponTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponTypeService],
    }).compile();

    service = module.get<CouponTypeService>(CouponTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
