import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './components/customer/customer.module';
import { AddressModule } from './components/address/address.module';
import { CouponModule } from './components/coupon/coupon.module';
import { CouponTypeModule } from './components/coupon-type/coupon-type.module';
import { CartItemModule } from './components/cart-item/cart-item.module';
import { CategoryModule } from './components/category/category.module';
import { BrandModule } from './components/brand/brand.module';
import { SkuModule } from './components/sku/sku.module';
import { CommentModule } from './components/comment/comment.module';
import { SpuModule } from './components/spu/spu.module';
import { OrderItemModule } from './components/order-item/order-item.module';
import { OrderModule } from './components/order/order.module';
import { HomeModule } from './components/home/home.module';
import { MessageModule } from './components/message/message.module';
import { FileModule } from './components/file/file.module';
import { BannerModule } from './components/banner/banner.module';
import { SearchModule } from './components/search/search.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'aigouwu',
      autoLoadEntities: true,
      synchronize: true,
      timezone: '+8',
    }),
    CustomerModule,
    AddressModule,
    CouponModule,
    CouponTypeModule,
    CartItemModule,
    CategoryModule,
    BrandModule,
    SkuModule,
    CommentModule,
    SpuModule,
    OrderItemModule,
    OrderModule,
    HomeModule,
    MessageModule,
    FileModule,
    BannerModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
