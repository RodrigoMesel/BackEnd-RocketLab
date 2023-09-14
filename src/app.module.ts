import { Module } from '@nestjs/common';
import { ColaboratorModule } from './Modules/colaborator.module';
import { PrismaService } from './database/prisma.service';
import { IndicatorModule } from './Modules/indicator.module';
import { ColaboratorIndicatorModule } from './Modules/colaborator-indicator.module';


@Module({
  imports: [ColaboratorModule, IndicatorModule, ColaboratorIndicatorModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
