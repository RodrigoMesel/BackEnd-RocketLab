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

  async getStatistics(){

    var lastMonth = new Date().getMonth()
    if(lastMonth == 0) {
      lastMonth = 12
    }

    var goal = []
    var superGoal = []
    var challenge = []
    var nothing = []

    for (var i = 1; i <= 6; i++) {

      var totalGoal = 0
      var totalSuperGoal = 0
      var totalChallenge = 0
      var totalNothing = 0

      var analysedMonth = lastMonth - i 
      if (analysedMonth <= 0) {
        analysedMonth = 12 + (lastMonth - i )
      }

      var monthResults = await this.colaboratorIndicatorRepository.findAllWithMonth(analysedMonth)

      monthResults.forEach(element => {

        if(element.result != null) {
  
          if(element.result >= element.challenge){
            totalChallenge ++
          }
          else if (element.result >= element.superGoal){ 
            totalSuperGoal ++
          }
          else if (element.result >= element.goal){
            totalGoal ++
          }
          else {
            totalNothing ++
          }
  
        } else{
          totalNothing ++
        }
        
      });

      goal.push(totalGoal)
      superGoal.push(totalSuperGoal)
      challenge.push(totalChallenge)
      nothing.push(totalNothing)

    }

    return {
     goal,
     superGoal,
     challenge,
     nothing,
    }

  }
}
