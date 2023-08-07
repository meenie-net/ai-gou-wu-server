import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    default: '',
  })
  sex: string;

  @Column({
    default: '',
  })
  tel: string;

  @Column({
    default: '',
  })
  nick: string;

  @Column({
    default: 0,
  })
  balance: number;

  @Column({
    default: '',
  })
  avatar: string;

  @Column()
  @DeleteDateColumn()
  deleted: string;

  @Column()
  @UpdateDateColumn()
  updateTime: string;
}
