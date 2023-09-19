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

  async getStatistics() {
    var lastMonth = new Date().getMonth();
    if (lastMonth == 0) {
      lastMonth = 12;
    }

    var lastMonthAchieveGoal = 0;
    var lastMonthAchieveSuperGoal = 0;
    var lastMonthAchieveChallenge = 0;
    var lastMonthAchieveNothing = 0;

    var totalGoal = 0;
    var totalSuperGoal = 0;
    var totalChallenge = 0;
    var totalNothing = 0;

    var lastMonthResults =
      await this.colaboratorIndicatorRepository.findAllWithMonth(lastMonth);

    lastMonthResults.forEach((element) => {
      if (element.result != null) {
        if (element.result >= element.challenge) {
          lastMonthAchieveChallenge++;
          totalChallenge++;
        } else if (element.result >= element.superGoal) {
          lastMonthAchieveSuperGoal++;
          totalSuperGoal++;
        } else if (element.result >= element.goal) {
          lastMonthAchieveGoal++;
          totalGoal++;
        } else {
          lastMonthAchieveNothing++;
          totalNothing++;
        }
      } else {
        totalNothing++;
        lastMonthAchieveNothing++;
      }
    });

    for (var i = 1; i < 6; i++) {
      var analysedMonth = lastMonth - i;
      if (analysedMonth == 0) {
        analysedMonth = 12;
      }
      lastMonthResults =
        await this.colaboratorIndicatorRepository.findAllWithMonth(
          analysedMonth,
        );

      lastMonthResults.forEach((element) => {
        if (element.result != null) {
          if (element.result >= element.challenge) {
            totalChallenge++;
          } else if (element.result >= element.superGoal) {
            totalSuperGoal++;
          } else if (element.result >= element.goal) {
            totalGoal++;
          } else {
            totalNothing++;
          }
        } else {
          totalNothing++;
        }
      });
    }

    return {
      lastMonthAchieveGoal,
      lastMonthAchieveSuperGoal,
      lastMonthAchieveChallenge,
      lastMonthAchieveNothing,

      totalGoal,
      totalSuperGoal,
      totalChallenge,
      totalNothing,
    };
  }
}
