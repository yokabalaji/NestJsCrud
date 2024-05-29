import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReportDto {
  @IsString()
  make: string;
  @IsString()
  model: string;
  @IsNumber()
  @Min(2000)
  @Max(2050)
  year: number;
  @IsNumber()
  @Min(0)
  @Max(100000)
  milage: number;
  @IsLongitude()
  lng: number;
  @IsLatitude()
  lat: number;
  @IsNumber()
  @Min(50000)
  @Max(100000)
  price: number;
}
