import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CreateIndicatorDto {
  @IsNotEmpty()
  name: string;

 
}
