import { Injectable } from '@nestjs/common';
import { CreateColaboratorDto } from '../DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from '../DTO/colaboratorDTO/update-colaborator.dto';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';

@Injectable()
export class ColaboratorService {

  constructor(private readonly colaboratorRepository: ColaboratorRepository) {}

  create(createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorRepository.create(createColaboratorDto);
  }

  findAll() {
    return this.colaboratorRepository.findAll();
  }

  findOne(id: number) {
    return this.colaboratorRepository.findOne(id);
  }

  update(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    return this.colaboratorRepository.update(id, updateColaboratorDto);
  }

  remove(id: number) {
    return this.colaboratorRepository.remove(id);
  }
}
