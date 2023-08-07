import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cart_item')
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  SKUId: string;

  @Column()
  customerId: string; // 用户

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
