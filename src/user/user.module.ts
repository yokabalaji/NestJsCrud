<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
=======
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { ReportModule } from 'src/reports/report.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    forwardRef(() => ReportModule),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
>>>>>>> 774d025 (queary selector)
})
export class UserModule {}
