import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IndicatorService } from '../Services/indicator.service';
import { CreateIndicatorDto } from '../DTO/indicatorDTO/create-indicator.dto';
import { UpdateIndicatorDto } from '../DTO/indicatorDTO/update-indicator.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('indicator')
@Controller('indicator')
export class IndicatorController {
  constructor(private readonly indicatorService: IndicatorService) {}

  @ApiOperation({ summary: 'Cria novo indicador' })
  @Post()
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorService.create(createIndicatorDto);
  }

  @ApiOperation({ summary: 'Retorna todos indicadores' })
  @Get()
  findAll() {
    return this.indicatorService.findAll();
  }

  @ApiOperation({ summary: 'Retorna um indicador' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicatorService.findOne(+id);
  }

  @ApiOperation({ summary: 'Modifica um indicador' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndicatorDto: UpdateIndicatorDto,
  ) {
    return this.indicatorService.update(+id, updateIndicatorDto);
  }

  @ApiOperation({ summary: 'Deleta um indicador' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorService.remove(+id);
  }
}
