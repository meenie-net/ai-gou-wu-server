import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { Banner } from '../banner/entities/banner.entity';
import { Spu } from '../spu/entities/spu.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Spu)
    private readonly spuRepo: Repository<Spu>,

    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,

    @InjectRepository(Banner)
    private readonly bannerRepo: Repository<Banner>,
  ) {}

  // 扫码
  scan(text: string) {
    return text;
  }

  // 首页搜索
  async search(keyword: string) {
    const result = await this.spuRepo.find({
      where: [
        {
          name: Like('%' + keyword + '%'),
        },
        {
          desc: Like('%' + keyword + '%'),
        },
      ],
    });
    return result;
  }

  // 搜索建议
  suggest(keyword: string) {
    return keyword;
  }

  // 首页初始化数据
  init() {
    const SPU_1 = {
      product: {
        name: '',
        category: '电器/电视',
        channel: 1,
        brand: {
          title: '嘉宝',
          logo: '',
        },
      },
      SKU: {
        title: '颜色',
        value: '白',
        stock: 10,
        price: 256,
        discount: 0.8,
        selling: 2,
        salesVolume: 20,
        img: '../../static/img/home/goods-1.png',
        desc: '大自然原生态产地安全有保障无污染绿色健康营养丰富',
      },
      comment: [], //评价
    };
    return {
      // 首页顶部分类
      category: [
        {
          title: '电器',
          level: 1,
          item: [
            {
              title: '电视',
              level: 2,
              item: [SPU_1],
            },
          ],
        },
        {
          title: '电器',
          level: 1,
          item: [
            {
              title: '电视',
              level: 2,
              item: [SPU_1],
            },
          ],
        },
      ],
      // 首页轮播
      banner: [
        {
          title: '111122',
          img: '../../static/img/home/banner-1.png',
          target: 'http://www.baidu.com',
        },
        {
          title: '111122',
          img: '../../static/img/home/home-head.png',
          target: '321312',
        },
        {
          title: '111122',
          img: '../../static/img/home/banner-1.png',
          target: '321312',
        },
      ],
      // 金刚键区
      quickAccess: [
        {
          title: '新人专享',
          icon: '../../static/img/home/quick-access-around.png',
          target: '',
        },
        {
          title: '新人专享',
          icon: '../../static/img/home/quick-access-around.png',
          target: '',
        },
        {
          title: '新人专享',
          icon: '../../static/img/home/quick-access-around.png',
          target: '',
        },
        {
          title: '新人专享',
          icon: '../../static/img/home/quick-access-around.png',
          target: '',
        },
        {
          title: '新人专享',
          icon: '../../static/img/home/quick-access-around.png',
          target: '',
        },
      ],
      // 新人专享
      newCustomer: {
        url: '',
        img: '',
      },
      // 促销区
      promotion: {
        // 每日疯抢
        daily: {
          describe: '10点场',
          // 开始时间
          startTime: '2023-2-28 10:00:00',
          // 链接
          url: 'string',
          // 图片
          img: '../../static/img/home/goods-1.png',
          // 颜色
          color: 'rgba(255,90,162,',
        },
        // 团购优惠
        groupon: {
          // 主标题
          title: '拼团特惠',
          // 副标题
          subTitle: '约会好友 超值拼购',
          // 链接
          url: 'string',
          // 图片
          img: '../../static/img/home/goods-1.png',
          // 颜色
          color: 'rgba(132,204,255,',
        },
        // 新品推荐
        new: {
          // 主标题
          title: '新品推荐',
          // 副标题
          subTitle: '给宝宝最好的',
          // 链接
          url: 'string',
          // 图片
          img: '../../static/img/home/goods-1.png',
          // 颜色
          color: 'rgba(255,147,42,',
        },
      },
      // 好物精选区
      wellChosen: [
        {
          main: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/wellChosen-1.png',
            // 颜色
            color: '#2FA3E7',
          },
          sub: [SPU_1, SPU_1, SPU_1, SPU_1, SPU_1],
        },
        {
          main: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/wellChosen-2.png',
            // 颜色
            color: 'string',
          },
          sub: [SPU_1, SPU_1, SPU_1, SPU_1, SPU_1],
        },
        {
          main: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/wellChosen-3.png',
            // 颜色
            color: 'string',
          },
          sub: [SPU_1, SPU_1, SPU_1, SPU_1, SPU_1],
        },
      ],
    };
  }

  // 猜你喜欢
  getGuessLike() {
    return this.spuRepo.find();
  }
}
