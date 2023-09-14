import { PartialType } from '@nestjs/mapped-types';
import { CreateColaboratorDto } from './create-colaborator.dto';

export class UpdateColaboratorDto extends PartialType(CreateColaboratorDto) {
    id: number;
}
