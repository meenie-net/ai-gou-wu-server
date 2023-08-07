import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('coupon')
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    default: 1,
  })
  type: number;

  @Column({
    default: 0,
  })
  amount: number;

  @Column({
    default: 0,
  })
  usedAmount: number;

  @Column()
  @DeleteDateColumn()
  deleted: string;

  @Column()
  @UpdateDateColumn()
  updateTime: string;
}
