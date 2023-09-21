import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateColaboratorDto } from 'src/DTO/colaboratorDTO/create-colaborator.dto';
import { UpdateColaboratorDto } from 'src/DTO/colaboratorDTO/update-colaborator.dto';
import { ColaboratorService } from 'src/Services/colaborator.service';

@ApiTags('colaborator')
@Controller('colaborator')
export class ColaboratorController {
  constructor(private readonly colaboratorService: ColaboratorService) {}

  @ApiOperation({ summary: 'Cria novo colaborador' })
  @Post()
  create(@Body() createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorService.create(createColaboratorDto);
  }

  @ApiOperation({ summary: 'Retorna todos colaboradores' })
  @Get()
  findAll() {
    return this.colaboratorService.findAll();
  }

  @ApiOperation({ summary: 'Retorna todos colaboradores ordenados por nome' })
  @Get('sortedByName')
  findAllOrderedByName() {
    return this.colaboratorService.getAllOrderedByName();
  }

  @ApiOperation({ summary: 'Retorna todos colaboradores ordenados por nota' })
  @Get('sortedByGrade')
  findAllOrderedByGrade() {
    return this.colaboratorService.getAllOrderedByGrade();
  }

  @ApiOperation({ summary: 'Retorna um colaborador' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboratorService.findOne(+id);
  }

  @ApiOperation({ summary: 'Modifica um colaborador' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColaboratorDto: UpdateColaboratorDto,
  ) {
    return this.colaboratorService.update(+id, updateColaboratorDto);
  }

  @ApiOperation({ summary: 'Deleta um colaborador' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboratorService.remove(+id);
  }
}
