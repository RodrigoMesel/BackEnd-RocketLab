import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColaboratorIndicatorService } from '../Services/colaborator-indicator.service';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('colaborator-indicator')
@Controller('colaborator-indicator')
export class ColaboratorIndicatorController {
  constructor(
    private readonly colaboratorIndicatorService: ColaboratorIndicatorService,
  ) {}

  @ApiOperation({ summary: 'Cria nova relação colaborador-indicador' })
  @Post()
  create(@Body() createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorService.create(
      createColaboratorIndicatorDto,
    );
  }

  @ApiOperation({ summary: 'Retorna estatísticas gerais dos indicadores' })
  @Get('statistics')
  async getStatistics() {
    return await this.colaboratorIndicatorService.getStatistics();
  }

  @ApiOperation({ summary: 'Retorna estatísticas de um usuário para um específico mês' })
  @Get('statistics/month/:month/colaboratorId/:colaboratorId')
  async getUserStatisticsByMonth(@Param('month') month: string, @Param('colaboratorId') colaboratorId: string) {
    return await this.colaboratorIndicatorService.getStatisticsByMonthAndColaborator(+month, +colaboratorId);
  }

  @ApiOperation({
    summary: 'Retorna estatísticas gerais dos indicadores por mes',
  })
  @Get('statistics/month/:month')
  async getStatisticsByMonth(@Param('month') month: string) {
    return await this.colaboratorIndicatorService.getStatisticsByMonth(+month);
  }

  @ApiOperation({ summary: 'Retorna todas as relações colaborador-indicador' })
  @Get()
  findAll() {
    return this.colaboratorIndicatorService.findAll();
  }

  @ApiOperation({ summary: 'Retorna uma relação colaborador-indicador' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboratorIndicatorService.findOne(+id);
  }

  @ApiOperation({ summary: 'Modifica uma relação colaborador-indicador' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto,
  ) {
    return this.colaboratorIndicatorService.update(
      +id,
      updateColaboratorIndicatorDto,
    );
  }

  @ApiOperation({ summary: 'Deleta uma relação colaborador-indicador' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboratorIndicatorService.remove(+id);
  }
}
