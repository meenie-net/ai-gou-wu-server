import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: '用户ID不能为空' })
  costomerId: string; // 用户ID

  @IsNotEmpty({ message: '商品SPUID不能为空' })
  SPUId: string; // SPUId

  rating: number; // 评分

  content: string; // 内容
}
