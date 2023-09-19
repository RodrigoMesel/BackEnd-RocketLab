import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CreateIndicatorDto {
  /**
   * Nome do indicador.
   * @example 'Vender produtos'
   */
  @IsNotEmpty()
  name: string;
}
