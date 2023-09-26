import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateColaboratorDto } from '../DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from '../DTO/colaboratorDTO/update-colaborator.dto';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';

@Injectable()
export class ColaboratorService implements OnApplicationBootstrap {

  constructor(private readonly colaboratorRepository: ColaboratorRepository,
              private readonly colaboratorIndicatorRepository: ColaboratorIndicatorRepository) {}

  async onApplicationBootstrap() {
    await this.updateGrade();
  }            

  async updateGrade() {
    var colaborators = await this.findAll()
    await Promise.all(colaborators.map(async element => {

      var userActivities = await this.colaboratorIndicatorRepository.findAllUserActivitiesWithLastMonth(element.id)
    
      var grade = 0
      if(userActivities.length != null && userActivities.length > 0){
        Promise.all(userActivities.map(async indicator => {
  
          if(indicator.result != null){
            if (indicator.result >= indicator.challenge) {
              grade += 5 * indicator.weight;
            } else if (indicator.result >= indicator.superGoal) {
              grade += 4 * indicator.weight;
            } else if (indicator.result >= indicator.goal) {
              grade += 3 * indicator.weight;
            } 
          }
        }));
      }

      grade = Math.round(grade * 10) / 10
      await this.colaboratorRepository.updateGrade(element, grade)
    }));
  }

  async create(createColaboratorDto: CreateColaboratorDto) {
    return await this.colaboratorRepository.create(createColaboratorDto);
  }

  async findAll() {
    return await this.colaboratorRepository.findAll();
  }

  async findOne(id: number) {
    return await this.colaboratorRepository.findOne(id);
  }

  async update(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    return await this.colaboratorRepository.update(id, updateColaboratorDto);
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
