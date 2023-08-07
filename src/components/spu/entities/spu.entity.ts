import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('spu')
export class Spu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column({
    default: '',
  })
  category: string;

  @Column({
    default: 0,
  })
  channel: number;

  @Column({
    default: '',
  })
  brandId: string;

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
