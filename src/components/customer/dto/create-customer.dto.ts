import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string; // 用户名

  @IsNotEmpty({ message: '密码不能为空' })
  password: string; // 密码

  sex: string;

  tel: string;

  nick: string;

  balance: number;

  avatar: string;
}
