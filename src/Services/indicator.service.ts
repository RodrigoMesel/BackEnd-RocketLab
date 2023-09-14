import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from '../DTO/indicatorDTO/create-indicator.dto';
import { UpdateIndicatorDto } from '../DTO/indicatorDTO/update-indicator.dto';
import { IndicatorRepository } from 'src/Repositories/indicator.repository';

@Injectable()
export class IndicatorService {

  constructor(private readonly indicatorRepository: IndicatorRepository) {}

  create(createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorRepository.create(createIndicatorDto);
  }

  findAll() {
    return this.indicatorRepository.findAll();
  }

  findOne(id: number) {
    return this.indicatorRepository.findOne(id);
  }

  update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    return this.indicatorRepository.update(id, updateIndicatorDto);
  }

  remove(id: number) {
    return this.indicatorRepository.remove(id);
  }
}
