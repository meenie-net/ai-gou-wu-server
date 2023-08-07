import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CreateOrderDto } from '../order/dto/create-order.dto';

@Controller('cartItem')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.create(createCartItemDto);
  }

  @Get('guessLike')
  guessLike() {
    return this.cartItemService.guessLike();
  }

  @Get('customer/:id')
  findByCustomerId(@Param('id') id: string) {
    return this.cartItemService.findByCustomerId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartItemService.update(id, updateCartItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemService.remove(id);
  }
}
