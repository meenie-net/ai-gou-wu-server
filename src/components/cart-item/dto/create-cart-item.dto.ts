import { IsNotEmpty } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty({ message: '用户ID不能为空' })
  customerId: string; // 用户

  @IsNotEmpty({ message: 'SKUID不能为空' })
  SKUId: string; // 商品

  count: number; // 数量
}
