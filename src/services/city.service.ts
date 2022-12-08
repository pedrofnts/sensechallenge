import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { get } from 'http';
import { identity } from 'rxjs';
import { CityEntity } from 'src/models/domain/city.entity';
import { CountryEntity } from 'src/models/domain/country.entity';
import { GetCitiesByCountryDto } from 'src/models/dto/get.cities.by.country.dto';
import { CitySchema } from 'src/schemas/city.schema';
import { Between, Repository } from 'typeorm';
import { Like } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private cityRepository: Repository<CityEntity>,
    @InjectRepository(CountryEntity)
    private countryRepository: Repository<CountryEntity>,
  ) {}

  async getCitiesByCountry(
    countryId: string,
    getCitiesByCountryDto: GetCitiesByCountryDto,
  ): Promise<CityEntity[] | null> {
    const { initialPopulation, finalPopulation, order, name, capital } =
      getCitiesByCountryDto;

    const countryExists = await this.countryRepository.findOne({
      where: {
        id: countryId,
      },
    });

    if (!countryExists) {
      throw new NotFoundException();
    }

    console.log({ getCitiesByCountryDto });

    var allCities = await this.cityRepository.find({
      relations: ['country'],
      where: {
        name,
      },
      order: {
        name: order,
      },
    });

    console.log({ allCities });

    const filteredCity = allCities.filter((city) => {
      return city.name == name;
    });

    return filteredCity;
  }

  public async create(
    countryId: string,
    body: CitySchema,
  ): Promise<CityEntity> | null {
    const { name, population, capital } = body;

    const countryExists = await this.countryRepository.findOne({
      where: {
        id: countryId,
      },
    });

    if (!countryExists) {
      throw new NotFoundException();
    }

    const cityExists = await this.cityRepository.findOne({
      where: {
        name: name,
      },
    });

    if (cityExists) {
      throw new ConflictException();
    }

    const city = await this.cityRepository.save({
      ...body,
      country: countryExists,
    });

    return city;
  }

  public async updateCitiesByCountry(
    countryId: string,
    cityId: string,
    body: Partial<CitySchema>,
  ): Promise<CityEntity> | null {
    const { name, population, capital } = body;

    const countryExists = await this.countryRepository.findOne({
      where: {
        id: countryId,
      },
    });

    const cityIdFound = await this.cityRepository.findOne({
      where: {
        id: cityId,
      },
    });

    const cityExists = await this.cityRepository.findOne({
      where: {
        name: name,
      },
    });

    if (!countryExists || !cityIdFound) {
      throw new NotFoundException();
    }

    if (cityExists) {
      throw new ConflictException();
    }

    const updated = await this.cityRepository.save({
      id: cityId,
      country: countryExists,
      ...body,
    });

    return updated;
  }
}
