import { PartialType } from '@nestjs/mapped-types';
import { CreateColaboratorIndicatorDto } from './create-colaborator-indicator.dto';

export class UpdateColaboratorIndicatorDto extends PartialType(CreateColaboratorIndicatorDto) {
    id: number;

    creationMonth: number;
}
