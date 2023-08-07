import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  costomerId: string;

  @Column()
  SPUId: string;

  @Column({
    default: 0,
  })
  rating: number;

  @Column({
    default: 0,
  })
  content: string;

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
