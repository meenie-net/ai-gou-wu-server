import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('order_item')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  SKUId: string;

  @Column()
  orderId: string;

  @Column({
    default: 0,
  })
  price: number;

  @Column({
    default: 0,
  })
  count: number;

  @Column()
  @DeleteDateColumn()
  deleted: string;

  @Column()
  @UpdateDateColumn()
  updateTime: string;

  toJSON() {
    delete this.deleted;
    return this;
  }
}
