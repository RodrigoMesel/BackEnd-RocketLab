import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { Unity } from '@prisma/client';

export class CreateIndicatorDto {
  @IsNotEmpty()
  name: string;

  @Min(0.01)
  @Max(0.99)
  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  @IsEnum(Unity)
  unity: Unity;

  @IsNotEmpty()
  goal: string;

  @IsNotEmpty()
  superGoal: string;

  @IsNotEmpty()
  challenge: string;

  @IsOptional()
  result: string;
}
