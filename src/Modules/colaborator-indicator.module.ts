import { Module } from '@nestjs/common';
import { ColaboratorIndicatorService } from '../Services/colaborator-indicator.service';
import { ColaboratorIndicatorController } from '../Controllers/colaborator-indicator.controller';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ColaboratorRepository } from 'src/Repositories/colaborator.repository';
import { IndicatorRepository } from 'src/Repositories/indicator.repository';

@Module({
  controllers: [ColaboratorIndicatorController],
  providers: [
    ColaboratorIndicatorService,
    ColaboratorIndicatorRepository,
    PrismaService,
    ColaboratorRepository,
    IndicatorRepository,
  ],
})
export class ColaboratorIndicatorModule {}
