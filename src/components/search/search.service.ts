import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService extends ElasticsearchService {
  constructor() {
    super({
      node: 'http://192.168.0.113:9200',
      maxRetries: 5,
      requestTimeout: 60000,
      sniffOnStart: true,
    });
  }
}
