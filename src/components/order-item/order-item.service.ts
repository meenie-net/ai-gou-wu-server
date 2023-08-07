import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,
  ) {}
  async create(createOrderItemDto: CreateOrderItemDto) {
    const customer = this.orderItemRepo.create(createOrderItemDto);
    return this.orderItemRepo.save(customer);
  }

  findAll() {
    return this.orderItemRepo.find();
  }

  findOne(id: string) {
    return this.orderItemRepo.findOneBy({ id });
  }

  update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemRepo.update(id, updateOrderItemDto);
  }

  remove(id: string) {
    return this.orderItemRepo.softDelete({ id });
  }
}
