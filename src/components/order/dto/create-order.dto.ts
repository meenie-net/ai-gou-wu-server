import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: '地址ID不能为空' })
  addressId: string; // 地址

  couponId: string[]; // 优惠券

  freight: number; // 运费,

  totalPrice: number; // 总价
}
