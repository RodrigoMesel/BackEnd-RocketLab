import { Module } from '@nestjs/common';
import { ColaboratorService } from '../Services/colaborator.service';
import { ColaboratorController } from 'src/Controllers/colaborator.controller';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ColaboratorController],
  providers: [ColaboratorService, ColaboratorRepository, PrismaService],
})
export class ColaboratorModule {}
