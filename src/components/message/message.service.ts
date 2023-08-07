import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>,
  ) {}
  create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepo.create(createMessageDto);
    return this.messageRepo.save(message);
  }

  findAll() {
    return this.messageRepo.find();
  }

  findOne(id: string) {
    return this.messageRepo.findOneBy({ id });
  }

  read(id: string) {
    return this.messageRepo.update(id, { read: 1 });
  }

  update(id: string, updateOrderDto: UpdateMessageDto) {
    return this.messageRepo.update(id, updateOrderDto);
  }

  remove(id: string) {
    return this.messageRepo.softDelete({ id });
  }
}
