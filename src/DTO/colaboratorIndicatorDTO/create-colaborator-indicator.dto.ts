import { IsNotEmpty } from 'class-validator';

export class CreateColaboratorIndicatorDto {
  @IsNotEmpty()
  colaboratorId: number;

  @IsNotEmpty()
  indicatorId: number;
}
