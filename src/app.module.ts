import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule,
  ],
=======
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ReportModule } from './reports/report.module';
import { Report } from './reports/entity/report.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestpractice',
      entities: [User, Report],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ReportModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [AppController],
>>>>>>> 774d025 (queary selector)
})
export class AppModule {}
