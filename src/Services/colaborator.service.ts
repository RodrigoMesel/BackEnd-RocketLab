import { Injectable } from '@nestjs/common';
import { CreateColaboratorDto } from '../DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from '../DTO/colaboratorDTO/update-colaborator.dto';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';

@Injectable()
export class ColaboratorService {

  constructor(private readonly colaboratorRepository: ColaboratorRepository,
              private readonly colaboratorIndicatorRepository: ColaboratorIndicatorRepository) {}

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

  async updateGrade(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    var userActivities = await this.colaboratorIndicatorRepository.findAllUserActivitiesWithLastMonth(updateColaboratorDto.id)
    
    var grade = 0
    userActivities.forEach(element => {

      if(element.result != null){
        grade += element.result * element.weight
      }
      
    });

    grade = grade / userActivities.length

    return this.colaboratorRepository.updateGrade(id, updateColaboratorDto, grade)
  }

  remove(id: number) {
    return this.colaboratorRepository.remove(id);
  }

  getAllOrderedByName(){
    return this.colaboratorRepository.getAllOrderedByName();

  }

  getAllOrderedByGrade(){
    return this.colaboratorRepository.getAllOrderedByGrade();

  }
}
