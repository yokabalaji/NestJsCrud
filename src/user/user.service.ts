import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
=======
import { UpdateUserDto } from './dtos/update-user-dto';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
>>>>>>> 774d025 (queary selector)

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
<<<<<<< HEAD
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  show(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
=======
    private usersRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.usersRepository.find();
  }
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }
  update(userId: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(userId, updateUserDto);
  }
  async getUser(userId: number) {
    return await this.usersRepository.findOne({ where: { id: userId } });
  }
  delete(userId: number) {
    return this.usersRepository.delete(userId);
  }
  findEmail(email: string) {
    return this.usersRepository.findOne({ where: { email: email } });
  }
  updateRt(id: number, rToken: string) {
    return this.usersRepository.update(id, { rToken: rToken });
>>>>>>> 774d025 (queary selector)
  }
}
