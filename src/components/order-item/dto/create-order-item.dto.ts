import { IsNotEmpty } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty({ message: '订单ID不能为空' })
  orderId: string; // 订单ID

  @IsNotEmpty({ message: '商品ID不能为空' })
  SKUId: string; // 商品

  count: number; // 数量
}
