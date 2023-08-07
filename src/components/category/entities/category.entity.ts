import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    default: '',
  })
  logo: string;

  @Column()
  parentId: string;

  @Column()
  @DeleteDateColumn()
  deleted: string;

  @Column()
  @UpdateDateColumn()
  updateTime: string;
}
