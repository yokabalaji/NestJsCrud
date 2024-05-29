import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entity/report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/user/entity/user.entity';
import { GetEstimateDto } from './dtos/get-current-estimateuserDto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report) private repoReport: Repository<Report>,
    @InjectRepository(User) private userReport: Repository<User>,
  ) {}
  create(reportDto: CreateReportDto, user: User) {
    const report = this.repoReport.create(reportDto);
    report.user = user;
    return this.repoReport.save(report);
  }

  async changeApproval(id: number, approved: boolean) {
    const report = await this.repoReport.findOneBy({ id: id });

    if (!report) {
      throw new NotFoundException('report not found');
    }
    report.approved = approved;
    const saveReport = await this.repoReport.save(report);
    console.log(saveReport);
    return saveReport;
  }

  async getEstimates({ make, model, lng, lat, year, milage }: GetEstimateDto) {
    return this.repoReport
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make=:make', { make })
      .andWhere('model=:model', { model })
      .andWhere('lng - :lng BETWEEN -5 and 5', { lng })
      .andWhere('lat - :lat BETWEEN -5 and 5', { lat })
      .andWhere('year - :year BETWEEN -3 and 3', { year })
      .andWhere('approved is true')
      .orderBy('ABS (milage -:milage)', 'DESC')
      .setParameters({ milage })
      .limit(3)
      .getRawOne();
  }
}
