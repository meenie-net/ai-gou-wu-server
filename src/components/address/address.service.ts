import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    const customer = this.addressRepo.create(createAddressDto);
    return this.addressRepo.save(customer);
  }

  findAll() {
    return this.addressRepo.find();
  }

  findByCustomerId(id: string) {
    return this.addressRepo.find({ where: { customerId: id } });
  }

  findOne(id: string) {
    return this.addressRepo.findOneBy({ id });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.addressRepo.update(id, updateAddressDto);
  }

  remove(id: string) {
    return this.addressRepo.softDelete({ id });
  }
}
