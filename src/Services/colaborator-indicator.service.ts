import { Injectable } from '@nestjs/common';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';

@Injectable()
export class ColaboratorIndicatorService {

  constructor(private readonly colaboratorIndicatorRepository: ColaboratorIndicatorRepository) {}

  create(createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorRepository.create(createColaboratorIndicatorDto);
  }

  findAll() {
    return this.colaboratorIndicatorRepository.findAll();
  }

  findOne(id: number) {
    return this.colaboratorIndicatorRepository.findOne(id);
  }

  update(id: number, updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorRepository.update(id, updateColaboratorIndicatorDto);
  }

  remove(id: number) {
    return this.colaboratorIndicatorRepository.remove(id);
  }
}
