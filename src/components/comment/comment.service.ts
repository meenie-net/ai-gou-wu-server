import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    const customer = this.commentRepo.create(createCommentDto);
    return this.commentRepo.save(customer);
  }

  findAll() {
    return this.commentRepo.find();
  }

  findOne(id: string) {
    return this.commentRepo.findOneBy({ id });
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentRepo.update(id, updateCommentDto);
  }

  remove(id: string) {
    return this.commentRepo.softDelete({ id });
  }

  async findList({ SPUId, pageSize = 10, pageNum = 1 }) {
    const [result, total] = await this.commentRepo
      .createQueryBuilder()
      .where({ SPUId })
      .skip((pageNum - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
    return { pageSize, pageNum, data: result, total };
  }
}
