import { Module } from '@nestjs/common';
import { ColaboratorService } from '../Services/colaborator.service';
import { ColaboratorController } from 'src/Controllers/colaborator.controller';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';

@Module({
  controllers: [ColaboratorController],
  providers: [
    ColaboratorService,
    ColaboratorRepository,
    ColaboratorIndicatorRepository,
    PrismaService,
  ],
})
export class ColaboratorModule {}
