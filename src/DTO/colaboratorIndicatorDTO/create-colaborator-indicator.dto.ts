import {
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CreateColaboratorIndicatorDto {
  /**
   * id do colaborador.
   * @example 2
   */
  @IsNotEmpty()
  colaboratorId: number;

  /**
   * id do indicador.
   * @example 3
   */
  @IsNotEmpty()
  indicatorId: number;

  /**
   * Resultado do indicador. Opcional.
   * @example 40
   */
  @IsOptional()
  result?: number = 0;

  /**
   * Peso do indicador.
   * @example 0.3
   */
  @Min(0.01)
  @Max(0.99)
  @IsNotEmpty()
  weight: number;

  /**
   * Meta do indicador.
   * @example 20
   */
  @IsNotEmpty()
  goal: number;

  /**
   * Super Meta do indicador.
   * @example 30
   */
  @IsNotEmpty()
  superGoal: number;

  /**
   * Desafio do indicador.
   * @example 40
   */
  @IsNotEmpty()
  challenge: number;
}
