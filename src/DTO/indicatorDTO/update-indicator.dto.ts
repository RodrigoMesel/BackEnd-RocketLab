import { PartialType } from '@nestjs/mapped-types';
import { CreateIndicatorDto } from './create-indicator.dto';

export class UpdateIndicatorDto extends PartialType(CreateIndicatorDto) {
  /**
   * id do indicador
   * @example 1
   */
  id: number;
}
