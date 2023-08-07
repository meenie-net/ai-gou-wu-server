import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from '../order-item/entities/order-item.entity';
import { Sku } from '../sku/entities/sku.entity';
import { CartItem } from '../cart-item/entities/cart-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, CartItem, OrderItem, Sku])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
