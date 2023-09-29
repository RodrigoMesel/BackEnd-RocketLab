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

  
  async getAllSeparetedByName(){
    var all = await this.colaboratorRepository.getAllOrderedByName();

    var actualLetter = ''
    var result = []

    all.forEach(element => {
      var initial = element.name[0].toUpperCase()
      var existingObject = result.find(item => item.initial === initial);

      if(existingObject){
        existingObject.colaborators.push(element);


      } else{
        actualLetter = initial
        result.push({
          initial: initial,
          colaborators: [element]
        })
      }
    });

    return result

  }

  getAllOrderedByGrade(){
    return this.colaboratorRepository.getAllOrderedByGrade();
  }

  async getAllSeparetedByGrade(){
    var all = await this.colaboratorRepository.getAllOrderedByGrade();

    var grade4_5 = []
    var grade3_4 = []
    var grade2_3 = []
    var grade1_2 = []
    var grade0_1 = []


    all.forEach(element => {
      if(element.grade <= 5 && element.grade >=4) {
        grade4_5.push(element)
      }
      else if(element.grade < 4 && element.grade >=3) {
        grade3_4.push(element)
      } else if(element.grade < 3 && element.grade >=2) {
        grade2_3.push(element)
      } else if(element.grade < 2 && element.grade >=1) {
        grade1_2.push(element)
      } else{
        grade0_1.push(element)
      }
    });

    return{
      grade4_5,
      grade3_4,
      grade2_3,
      grade1_2,
      grade0_1
    }

  }

  

  
}
