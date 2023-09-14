import { Injectable } from '@nestjs/common';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ColaboratorIndicatorRepository {
    constructor( private prisma: PrismaService) {}

    async create(createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
      try {     
  
          return await this.prisma.colaboratorIndicator.create({
              data: createColaboratorIndicatorDto
          })
  
      } catch (error) {
        throw error;
      };
    }
  
    async findAll() {
      try {     
  
          return await this.prisma.colaboratorIndicator.findMany()
  
      } catch (error) {
        throw error;
      };
    }
  
    async findOne(id: number) {
      try {     
  
          return await this.prisma.colaboratorIndicator.findUnique({
              where:{
                  id: id
              }
          })
  
      } catch (error) {
        throw error;
      };
    }
  
    async update(id: number, updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto) {
      try {     
  
          return await this.prisma.colaboratorIndicator.update({
              where: {
                  id: id
              },
              data: updateColaboratorIndicatorDto
          })
  
      } catch (error) {
        throw error;
      };
    }
  
    async remove(id: number) {
      try {     
  
          return await this.prisma.colaboratorIndicator.delete({
              where: {
                  id: id
              }
          })
  
      } catch (error) {
        throw error;
      };
    }
}
