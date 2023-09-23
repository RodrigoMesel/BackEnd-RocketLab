import { Injectable } from '@nestjs/common';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';

@Injectable()
export class ColaboratorIndicatorService {
  constructor(
    private readonly colaboratorIndicatorRepository: ColaboratorIndicatorRepository, 
    private readonly colaboratorRepository: ColaboratorRepository
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

  async getDashboardStatistics(){ // Estatisticas do dashboard da tela principal

    var lastMonth = new Date().getMonth()
    if(lastMonth == 0) {
      lastMonth = 12
    }

    var lastMonthHighlights = {
      goal: [],
      superGoal: [],
      challenge: [],
      nothing: []
    }

    var goal = [0,0,0,0,0,0]
    var superGoal = [0,0,0,0,0,0]
    var challenge = [0,0,0,0,0,0]
    var nothing = [0,0,0,0,0,0]

    var colaborators = await this.colaboratorRepository.getAllOrderedByGrade()

    await Promise.all(colaborators.map(async colaborator => {
      var lastMonthResult = await this.getDashStatisticsByColaboratorAndMonth(colaborator.id, lastMonth);
  
      if (lastMonthResult.challenge > 0) {
        lastMonthHighlights.challenge.push(colaborator);
        challenge[0] += 1;
      } else if (lastMonthResult.superGoal > 0) {
        lastMonthHighlights.superGoal.push(colaborator);
        superGoal[0] += 1;
      } else if (lastMonthResult.goal > 0) {
        lastMonthHighlights.goal.push(colaborator);
        goal[0] += 1;
      } else {
        lastMonthHighlights.nothing.push(colaborator);
        nothing[0] += 1;
      }
  
      for (var i = 1; i < 6; i++) {
        var analysedMonth = lastMonth - i;
        if (analysedMonth <= 0) {
          analysedMonth = 12 + (lastMonth - i);
        }
  
        var monthResult = await this.getDashStatisticsByColaboratorAndMonth(colaborator.id, analysedMonth);
  
        if (monthResult.challenge > 0) {
          challenge[i] += 1;
        } else if (monthResult.superGoal > 0) {
          superGoal[i] += 1;
        } else if (monthResult.goal > 0) {
          goal[i] += 1;
        } else {
          nothing[i] += 1;
        }
      }
    }));

    return {
     goal,
     superGoal,
     challenge,
     nothing,

     lastMonthHighlights
    }
  }

  async getDashStatisticsByColaboratorAndMonth(id: number, month: number) { // Auxiliar da função de cima

    const monthIndicators = await this.colaboratorIndicatorRepository.findAllWithMonthAndColaborator(month, id);
    var goal = 0;
    var superGoal = 0;
    var challenge = 0;
    var nothing = 0;

    monthIndicators.forEach((element) => {
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
    })
    
    return {
      goal,
      superGoal,
      challenge,
      nothing
    }
  }

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

  async getUserStatistics(month: number, id: number) { // Estatisticas do usuario por mes
    var actualMonth = new Date().getMonth() + 1

    if(actualMonth == month){
      return await this.getStatisticsByActualMonthAndColaborator(actualMonth, id)
    } 
    else{
      return await this.getStatisticsByMonthAndColaborator(month, id)
    }

  }

  async getStatisticsByActualMonthAndColaborator(month: number, id: number) {
    
    // Informações do ultimo mes
    var goal = 0;
    var superGoal = 0;
    var challenge = 0;
    var nothing = 0;
    var nothingIndicators = []
    var monthGrade = 0;


    var lastMonth = new Date().getMonth()
    if(lastMonth == 0) {
      lastMonth = 12
    }

    const lastMonthIndicators =
      await this.colaboratorIndicatorRepository.findAllWithMonthAndColaborator(lastMonth, id);

      // Indicadores do mes atual
    const monthIndicators =
      await this.colaboratorIndicatorRepository.findAllWithMonthAndColaborator(month, id);

    lastMonthIndicators.forEach((element) => {
      if (element.result != null) {

        monthGrade += element.result * element.weight

        if (element.result >= element.challenge) {
          challenge++;
        } else if (element.result >= element.superGoal) {
          superGoal++;
        } else if (element.result >= element.goal) {
          goal++;
        } else {
          nothing++;
          nothingIndicators.push(element)
        }
      } else {
        nothing++;
        nothingIndicators.push(element)
      }
    });

    monthGrade /= lastMonthIndicators.length

    return {
      goal,
      superGoal,
      challenge,
      nothing,
      monthGrade,
      nothingIndicators,

      monthIndicators,
    };
  }

  async getStatisticsByMonthAndColaborator(month: number, id: number) {
    if (month == 0) {
      month = 12;
    }

    var goal = 0;
    var superGoal = 0;
    var challenge = 0;
    var nothing = 0;
    var nothingIndicators = []
    var monthGrade = 0;


    const monthIndicators =
      await this.colaboratorIndicatorRepository.findAllWithMonthAndColaborator(month, id);

    monthIndicators.forEach((element) => {
      if (element.result != null) {

        monthGrade += element.result * element.weight

        if (element.result >= element.challenge) {
          challenge++;
        } else if (element.result >= element.superGoal) {
          superGoal++;
        } else if (element.result >= element.goal) {
          goal++;
        } else {
          nothing++;
          nothingIndicators.push(element)
        }
      } else {
        nothing++;
        nothingIndicators.push(element)
      }
    });

    monthGrade = monthGrade / monthIndicators.length

    return {
      goal,
      superGoal,
      challenge,
      nothing,
      monthGrade,
      nothingIndicators,

      monthIndicators,
    };
  }


  async getUserHistory(colaboratorId: number) { // Dashboard inidvidual de cada usuario

    var goal = [0,0,0,0,0,0]
    var superGoal = [0,0,0,0,0,0]
    var challenge = [0,0,0,0,0,0]
    var nothing = [0,0,0,0,0,0]

    var lastMonth = new Date().getMonth()
    if(lastMonth == 0) {
      lastMonth = 12
    }

    for (var i = 0; i < 6; i++) {

      var analysedMonth = lastMonth - i;
      if (analysedMonth <= 0) {
        analysedMonth = 12 + (lastMonth - i);
      }

      var monthResult = await this.getDashStatisticsByColaboratorAndMonth(colaboratorId, analysedMonth);

      goal[i] = monthResult.goal
      superGoal[i] = monthResult.superGoal
      challenge[i] = monthResult.challenge
      nothing[i] = monthResult.nothing
    }

    return{
      goal,
      superGoal,
      challenge,
      nothing
    }
  }
}
