import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entity/report.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { User } from 'src/user/entity/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Report, User]),
    forwardRef(() => UserModule),
  ],
  providers: [ReportService],
  controllers: [ReportController],
  exports: [ReportService],
})
export class ReportModule {}
