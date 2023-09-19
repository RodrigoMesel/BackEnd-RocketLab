import { Unity } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

export class CreateColaboratorIndicatorDto {
  @IsNotEmpty()
  colaboratorId: number;

  @IsNotEmpty()
  indicatorId: number;

  @IsOptional()
  result: number;

  @Min(0.01)
  @Max(0.99)
  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  @IsEnum(Unity)
  unity: Unity;

  @IsNotEmpty()
  goal: number;

  @IsNotEmpty()
  superGoal: number;

  @IsNotEmpty()
  challenge: number;


}
