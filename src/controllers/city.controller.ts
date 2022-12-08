import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CityEntity } from 'src/models/domain/city.entity';
import { GetCitiesByCountryDto, Order } from 'src/models/dto/get.cities.by.country.dto';
import { CitySchema } from 'src/schemas/city.schema';
import { CityService } from 'src/services/city.service';


@Controller('/countries/:countryId/cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  public async create(@Param('countryId') countryId: string, @Body() body: CitySchema): Promise<CityEntity> {
    return this.cityService.create(countryId, body);
  }

  @Get()
  public async getCitiesByCountry( //TODO: Implementar no desafio remover parseIntPipe
    @Param('countryId') countryId: string,
    @Query('name') name: string,
    @Query('capital') capital: boolean,
    @Query('initialPopulation') initialPopulation: string,
    @Query('finalPopulation') finalPopulation: string,
    @Query('order') order: Order,
  ): Promise<CityEntity[]> {
    
    const getCitiesByCountryDto = new GetCitiesByCountryDto();
    getCitiesByCountryDto.capital = capital;
    getCitiesByCountryDto.name = name;
    getCitiesByCountryDto.initialPopulation = initialPopulation;
    getCitiesByCountryDto.finalPopulation = finalPopulation;
    getCitiesByCountryDto.order = order;

    return this.cityService.getCitiesByCountry(countryId, getCitiesByCountryDto);
  }

  @Put(':cityId')
  public async update(
    @Param('countryId') countryId: string,
    @Param('cityId') cityId: string,
    @Body() body: CitySchema,
  ): Promise<CityEntity> {
    return this.cityService.updateCitiesByCountry(countryId, cityId, body)
  }
 
}
