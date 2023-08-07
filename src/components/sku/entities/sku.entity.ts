import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sku')
export class Sku {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  SPUId: string;

  @Column({
    default: '',
  })
  value: string;

  @Column({
    default: 0,
  })
  stock: number;

  @Column({
    default: 0,
  })
  price: number;

  @Column({
    default: '',
  })
  img: string;

  @Column({
    default: 1,
  })
  discount: number;

  @Column({
    default: '',
  })
  desc: string;

  @Column({
    default: 0,
  })
  selling: number;

  @Column({
    default: 0,
  })
  salesVolume: number;

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
