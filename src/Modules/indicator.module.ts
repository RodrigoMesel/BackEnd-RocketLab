import { Module } from '@nestjs/common';
import { IndicatorService } from '../Services/indicator.service';
import { IndicatorController } from '../Controllers/indicator.controller';
import { IndicatorRepository } from 'src/Repositories/indicator.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [IndicatorController],
  providers: [IndicatorService, IndicatorRepository, PrismaService],
})
export class IndicatorModule {}
