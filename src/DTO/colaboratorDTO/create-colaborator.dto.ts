import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateColaboratorDto {
  /**
   * Nome do colaborador.
   * @example 'Alice Martins'
   */
  @IsNotEmpty()
  name: string;

  /**
   * Cargo do colaborador.
   * @example 'Marketing'
   */
  @IsNotEmpty()
  role: string;
}
