import { Injectable } from '@nestjs/common';
import { CreateColaboratorDto } from '../DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from '../DTO/colaboratorDTO/update-colaborator.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ColaboratorRepository {
  constructor( private prisma: PrismaService) {}

  async create(createColaboratorDto: CreateColaboratorDto) {
    try {     

        return await this.prisma.colaborator.create({            
            data: createColaboratorDto
        })

    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {     

        return await this.prisma.colaborator.findMany()

    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {     

        return await this.prisma.colaborator.findUnique({            
            where: {
                id: id
            }
        })

    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    try {     

        return await this.prisma.colaborator.update({   
            where: {
                id: id
            },         

            data: updateColaboratorDto
        })

    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {     

        return await this.prisma.colaborator.delete({            
            where: {
                id: id
            }
        })

    } catch (error) {
      throw error;
    };
  }
}
