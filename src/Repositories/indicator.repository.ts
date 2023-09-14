import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from '../DTO/indicatorDTO/create-indicator.dto';
import { UpdateIndicatorDto } from '../DTO/indicatorDTO/update-indicator.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class IndicatorRepository {

  constructor( private prisma: PrismaService) {}

  async create(createIndicatorDto: CreateIndicatorDto) {
    try {     
        return await this.prisma.indicator.create({
            data: createIndicatorDto
        })

    } catch (error) {
      throw error;
    };
  }

  async findAll() {
    try {     

        return await this.prisma.indicator.findMany()

    } catch (error) {
      throw error;
    };
  }

  async findOne(id: number) {
    try {     

        return await this.prisma.indicator.findUnique({
            where:{
                id: id
            }
        })

    } catch (error) {
      throw error;
    };
  }

  async update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    try {     

        return await this.prisma.indicator.update({
            where: {
                id: id
            },
            data: updateIndicatorDto
        })

    } catch (error) {
      throw error;
    };
  }

  async remove(id: number) {
    try {     

        return await this.prisma.indicator.delete({
            where: {
                id: id
            }
        })

    } catch (error) {
      throw error;
    };
  }
}
