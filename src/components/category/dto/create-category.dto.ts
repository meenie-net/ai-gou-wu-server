import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: '标题不能为空' })
  title: string; // 标题

  logo: string; // 图标

  parentId: string; // 父分类Id
}
