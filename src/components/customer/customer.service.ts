import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const { username } = createCustomerDto;
    const result = await this.customerRepo.findOneBy({ username });
    console.log('result', result);
    if (result) {
      throw new HttpException(
        { message: '请求错误', error: '用户已存在' },
        HttpStatus.BAD_REQUEST,
      );
    }
    const customer = this.customerRepo.create(createCustomerDto);
    return this.customerRepo.save(customer);
  }

  async findList({ pageSize, pageNum }) {
    const [result, total] = await this.customerRepo
      .createQueryBuilder()
      .skip((pageNum - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
    return { pageSize, pageNum, data: result, total };
  }

  findOne(id: string) {
    return this.customerRepo.findOneBy({ id });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    console.log('id', id);
    console.log('updateCustomerDto', updateCustomerDto);
    return this.customerRepo.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.customerRepo.softDelete({ id });
  }
}
