import { IsNotEmpty } from 'class-validator';

export class CreateColaboratorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  role: string;
}
