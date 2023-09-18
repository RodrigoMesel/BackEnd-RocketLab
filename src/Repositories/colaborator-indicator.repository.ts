import { Injectable } from '@nestjs/common';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class ColaboratorIndicatorRepository {
  constructor(private prisma: PrismaService) {}

  async create(createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
    try {
      return await this.prisma.colaboratorIndicator.create({
          data: {
            colaboratorId: createColaboratorIndicatorDto.colaboratorId,
            indicatorId: createColaboratorIndicatorDto.indicatorId,
            result: createColaboratorIndicatorDto.result,
            weight: createColaboratorIndicatorDto.weight,
            challenge: createColaboratorIndicatorDto.challenge,
            superGoal: createColaboratorIndicatorDto.superGoal,
            goal: createColaboratorIndicatorDto.goal,
            unity: createColaboratorIndicatorDto.unity,
            creationMonth: new Date().getMonth() + 1
          }        
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.colaboratorIndicator.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.colaboratorIndicator.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findAllWithActualMonth() {
    try {
      return await this.prisma.colaboratorIndicator.findMany({
        where: {
          creationMonth: new Date().getMonth() + 1
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async findAllWithMonth(month : number) {
    try {
      return await this.prisma.colaboratorIndicator.findMany({
        where: {
          creationMonth: month
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async findAllUserActivitiesWithLastMonth(id: number) {
    try {
      var lastMonth = new Date().getMonth()
      if(lastMonth == 0){
        lastMonth = 12
      }
      return await this.prisma.colaboratorIndicator.findMany({
        where: {
          creationMonth: lastMonth,
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto,
  ) {
    try {
      return await this.prisma.colaboratorIndicator.update({
        where: {
          id: id,
        },
        data: updateColaboratorIndicatorDto
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.colaboratorIndicator.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
