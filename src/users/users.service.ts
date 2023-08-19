import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository, DataSource } from 'typeorm';
import { User } from '../entities/User';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  private async checkUserExists(_userId: string) {
    const user = await this.userRepository.findOne({
      where: { userId: _userId },
    });

    return user;
  }

  private async saveUser(dto: CreateUserDto) {
    const user = await this.userRepository.save(dto);
    // this.dataSource.transaction(async (manager) => {
    //   await manager.save(dto);
    // });
  }

  async create(dto: CreateUserDto) {
    if (await this.checkUserExists(dto.userId)) {
      throw new UnprocessableEntityException('userId is already exists');
    }

    await this.saveUser(dto);
  }

  findAll(): Promise<User[]> {
    //return `This action returns all users`;
    return this.userRepository.find();
  }

  // findOne(id: number): Promise<User> {
  //   //return `This action returns a #${id} user`;
  //   return this.userRepository.findOneBy({ id });
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // async remove(id: number): Promise<void> {
  //   //return `This action removes a #${id} user`;
  //   await this.userRepository.delete(id);
  // }
}
