import { HttpException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { HTTP_STATUS_CODE } from 'src/config/config';
import { OrderItem } from '../order-item/entities/order-item.entity';
import { Sku } from '../sku/entities/sku.entity';
import { CartItem } from '../cart-item/entities/cart-item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,

    @InjectRepository(CartItem)
    private readonly cartItemRepo: Repository<CartItem>,

    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,

    @InjectRepository(Sku)
    private readonly skuRepo: Repository<Sku>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const customer = this.orderRepo.create(createOrderDto);
    return this.orderRepo.save(customer);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: string) {
    return this.orderRepo.findOneBy({ id });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderRepo.update(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderRepo.softDelete({ id });
  }

  async placeOrder({ orderDto, cartItems }) {
    const order = this.orderRepo.create(orderDto);
    let savedOrder;
    try {
      savedOrder = await this.orderRepo.save(order);
    } catch (error) {
      throw new HttpException('下单失败', HTTP_STATUS_CODE.UPDATE_ERROR);
    }
    try {
      cartItems.forEach(async (id) => {
        const cartItem = await this.cartItemRepo.findOneBy({ id });
        const SKU = await this.skuRepo.findOneBy({ id: cartItem.SKUId });
        const orderItem = this.orderItemRepo.create({
          SKUId: cartItem.SKUId,
          price: SKU.price,
          count: cartItem.count,
          orderId: savedOrder[0].id,
        });
        this.orderItemRepo.save(orderItem);
      });
    } catch (error) {
      throw new HttpException('下单失败', HTTP_STATUS_CODE.UPDATE_ERROR);
    }
    return 'OK';
  }
}
