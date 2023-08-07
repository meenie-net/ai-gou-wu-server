import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  // 头部分类
  // 轮播图
  // 金刚区
  // 促销区
  // 瓷片区
  // 好物精选
  @Get('init')
  getCategory() {
    return this.homeService.init();
  }

  // 猜你喜欢
  @Get('guessLike')
  getGuessLike() {
    return this.homeService.getGuessLike();
  }

  // 扫码
  @Get('scan/:text')
  scan(@Param('text') text: string) {
    return this.homeService.scan(text);
  }

  // 首页搜索
  @Get('search/:keyword')
  search(@Param('keyword') keyword: string) {
    return this.homeService.search(keyword);
  }

  // 搜索建议
  @Get('suggest/:keyword')
  suggest(@Param('keyword') keyword: string) {
    return this.homeService.suggest(keyword);
  }
}
