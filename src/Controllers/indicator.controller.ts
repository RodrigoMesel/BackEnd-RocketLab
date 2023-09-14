import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndicatorService } from '../Services/indicator.service';
import { CreateIndicatorDto } from '../DTO/indicatorDTO/create-indicator.dto';
import { UpdateIndicatorDto } from '../DTO/indicatorDTO/update-indicator.dto';

@Controller('indicator')
export class IndicatorController {
  constructor(private readonly indicatorService: IndicatorService) {}

  @Post()
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorService.create(createIndicatorDto);
  }

  @Get()
  findAll() {
    return this.indicatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndicatorDto: UpdateIndicatorDto) {
    return this.indicatorService.update(+id, updateIndicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorService.remove(+id);
  }
}
