import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }
  
  create(createUserDto: CreateUserDto) {
    createUserDto.password = bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(10));
    this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]>{
    //return `This action returns all user`;
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User | null>{    
    //return `This action returns a #${id} user`;
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    //return `This action removes a #${id} user`;
    await this.userRepository.delete(id);
  }
}
