import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerId: string;

  @Column()
  addressId: string;

  @Column({
    default: 0,
  })
  freight: number;

  @Column({
    default: 0,
  })
  totalPrice: number;

  @Column({
    default: 0,
  })
  state: number;

  @Column()
  @DeleteDateColumn()
  deleted: string;

  @Column()
  @CreateDateColumn()
  createTime: string;

  toJSON() {
    delete this.deleted;
    return this;
  }
}
