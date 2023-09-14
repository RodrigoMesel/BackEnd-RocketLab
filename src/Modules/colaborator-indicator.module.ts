import { Module } from '@nestjs/common';
import { ColaboratorIndicatorService } from '../Services/colaborator-indicator.service';
import { ColaboratorIndicatorController } from '../Controllers/colaborator-indicator.controller';
import { ColaboratorIndicatorRepository } from 'src/Repositories/colaborator-indicator.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ColaboratorIndicatorController],
  providers: [ColaboratorIndicatorService, ColaboratorIndicatorRepository, PrismaService],
})
export class ColaboratorIndicatorModule {}
