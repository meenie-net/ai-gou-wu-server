import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  fromId: string;

  @Column({
    default: 0,
  })
  read: number;

  @Column()
  @CreateDateColumn()
  createTime: string;
}
