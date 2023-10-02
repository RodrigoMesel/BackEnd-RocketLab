import {
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { Unity } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';


export class CreateIndicatorDto {
  /**
   * Nome do indicador.
   * @example 'Vender produtos'
   */
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Tipo do indicador',
    enum: Unity,
    example: 'Numero',
  })
  @IsEnum(Unity)
  @IsNotEmpty()
  unity: Unity;
}
