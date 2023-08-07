import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';
import { Spu } from '../spu/entities/spu.entity';
import { Sku } from '../sku/entities/sku.entity';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepo: Repository<CartItem>,
  ) {}
  async create(createCartItemDto: CreateCartItemDto) {
    const customer = this.cartItemRepo.create(createCartItemDto);
    return this.cartItemRepo.save(customer);
  }

  guessLike() {
    return this.cartItemRepo.find();
  }

  findByCustomerId(customerId: string) {
    return this.cartItemRepo
      .createQueryBuilder('cart_item')
      .where({ customerId })
      .leftJoinAndMapOne(
        'cart_item.SKU',
        Sku,
        'SKU',
        'cart_item.SKUId = SKU.id',
      )
      .leftJoinAndMapOne('cart_item.SPU', Spu, 'SPU', 'SKU.SPUId = SPU.id')
      .getMany();
  }

  findOne(id: string) {
    return this.cartItemRepo.findOneBy({ id });
  }

  update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemRepo.update(id, updateCartItemDto);
  }

  remove(id: string) {
    return this.cartItemRepo.softDelete({ id });
  }
}
