import { PartialType } from '@nestjs/mapped-types';
import { CreateColaboratorIndicatorDto } from './create-colaborator-indicator.dto';

export class UpdateColaboratorIndicatorDto extends PartialType(
  CreateColaboratorIndicatorDto,
) {
  /**
   * id do colaborator-indicator
   * @example 1
   */
  id: number;

  /**
   * Mês de criação do indicador para aquele colaborador
   * @example 11
   */
  creationMonth: number;
}
