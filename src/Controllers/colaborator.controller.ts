import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateColaboratorDto } from 'src/DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from 'src/DTO/colaboratorDTO/update-colaborator.dto';
import { ColaboratorService } from 'src/Services/colaborator.service';


@Controller('colaborator')
export class ColaboratorController {
  constructor(private readonly colaboratorService: ColaboratorService) {}

  @Post()
  create(@Body() createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorService.create(createColaboratorDto);
  }

  @Get()
  findAll() {
    return this.colaboratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboratorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColaboratorDto: UpdateColaboratorDto) {
    return this.colaboratorService.update(+id, updateColaboratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboratorService.remove(+id);
  }
}
