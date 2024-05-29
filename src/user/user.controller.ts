import {
  Body,
  Controller,
  Delete,
  Get,
<<<<<<< HEAD
=======
  Inject,
>>>>>>> 774d025 (queary selector)
  Param,
  ParseIntPipe,
  Patch,
  Post,
<<<<<<< HEAD
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
=======
  Request,
  UseGuards,
  forwardRef,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { AuthService } from '../auth/auth.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  @Get()
  get() {
    return this.userService.get();
  }
  @Public()
  @Post()
  postData(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get('/:userId')
  getId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }

  @Patch('/:userId')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(userId, updateUserDto);
>>>>>>> 774d025 (queary selector)
  }
}
