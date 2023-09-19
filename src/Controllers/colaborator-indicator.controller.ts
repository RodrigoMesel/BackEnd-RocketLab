import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColaboratorIndicatorService } from '../Services/colaborator-indicator.service';
import { CreateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/create-colaborator-indicator.dto';
import { UpdateColaboratorIndicatorDto } from '../DTO/colaboratorIndicatorDTO/update-colaborator-indicator.dto';

@Controller('colaborator-indicator')
export class ColaboratorIndicatorController {
  constructor(private readonly colaboratorIndicatorService: ColaboratorIndicatorService) {}

  @Post()
  create(@Body() createColaboratorIndicatorDto: CreateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorService.create(createColaboratorIndicatorDto);
  }

  @Get('statistics')
  async getStatistics(){
    return await this.colaboratorIndicatorService.getStatistics()
  }

  @Get()
  findAll() {
    return this.colaboratorIndicatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboratorIndicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColaboratorIndicatorDto: UpdateColaboratorIndicatorDto) {
    return this.colaboratorIndicatorService.update(+id, updateColaboratorIndicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboratorIndicatorService.remove(+id);
  }
}
