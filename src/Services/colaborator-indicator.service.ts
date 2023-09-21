import { Injectable } from '@nestjs/common';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';

@Injectable()
export class ColaboratorIndicatorService {
  constructor(
    private readonly colaboratorIndicatorRepository: ColaboratorIndicatorRepository,
  ) {}

  create(createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorRepository.create(
      createColaboratorIndicatorDto,
    );
  }

  findAll() {
    return this.colaboratorIndicatorRepository.findAll();
  }

  findOne(id: number) {
    return this.colaboratorIndicatorRepository.findOne(id);
  }

  update(
    id: number,
    updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto,
  ) {
    return this.colaboratorIndicatorRepository.update(
      id,
      updateColaboratorIndicatorDto,
    );
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

      var analysedMonth = lastMonth - i 
      if (analysedMonth <= 0) {
        analysedMonth = 12 + (lastMonth - i )
      }

      var monthResult = await this.getStatisticsByMonth(analysedMonth)

      goal.push(monthResult.goal)
      superGoal.push(monthResult.superGoal)
      challenge.push(monthResult.challenge)
      nothing.push(monthResult.nothing)

    }

    return {
     goal,
     superGoal,
     challenge,
     nothing,
    }
  }

  //TODO
  async getStatisticsByColaboratorMonth(id: number, month: number) {}

  //TODO
  async getStatisticsByColaborator(id: number) {}

  async getStatisticsByMonth(month: number) {
    if (month == 0) {
      month = 12;
    }
    var goal = 0;
    var superGoal = 0;
    var challenge = 0;
    var nothing = 0;

    const results =
      await this.colaboratorIndicatorRepository.findAllWithMonth(month);

    results.forEach((element) => {
      if (element.result != null) {
        if (element.result >= element.challenge) {
          challenge++;
        } else if (element.result >= element.superGoal) {
          superGoal++;
        } else if (element.result >= element.goal) {
          goal++;
        } else {
          nothing++;
        }
      } else {
        nothing++;
      }
    });

    return {
      goal,
      superGoal,
      challenge,
      nothing,
    };
  }
}
