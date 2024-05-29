import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportService } from './report.service';
import { UserDetail } from 'src/user/decorators/current-user-data.decorator';
import { ApproveReportDto } from './dtos/ApproveReportDto';
import { AdminGuard } from 'src/auth/guards/adminGuard';
import { GetEstimateDto } from './dtos/get-current-estimateuserDto';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Post()
  createReport(@Body() body: CreateReportDto, @UserDetail() user: any) {
    return this.reportService.create(body, user.userId);
  }

  @UseGuards(AdminGuard)
  @Put('/:userId')
  approveReport(
    @Param('userId', ParseIntPipe) id: number,
    @Body() body: ApproveReportDto,
  ) {
    console.log(body.approved);
    console.log(id);
    return this.reportService.changeApproval(id, body.approved);
  }

  @Get()
  getEstimates(@Query() queary: GetEstimateDto) {
    console.log(queary)
    return this.reportService.getEstimates(queary);
  }
}
