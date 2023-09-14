import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateColaboratorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Min(0)
  @Max(5)
  grade: number;
}
