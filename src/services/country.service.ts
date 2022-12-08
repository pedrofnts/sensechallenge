import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from 'src/models/domain/country.entity';
import { CreateCountryDto } from 'src/models/dto/create.country.dto';
import { GetPasswordDto } from 'src/models/dto/get.password';
import { CountrySchema } from 'src/schemas/country.schema';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity) private model: Repository<CountryEntity>,
  ) {}

  async findAll(): Promise<CountryEntity[]> {
    const countries = await this.model.find();
    return countries;
  }

  async getCountryPasswords(countryId: string): Promise<GetPasswordDto> {
    const sensediers = 850;
    let evenNumbers = 0; // Soma números pares
    let oddNumbers = 1; // Multiplicação
    const countryExists = await this.model.findOne({
      where: {
        id: countryId,
      },
    });

    if (!countryExists) {
      throw new NotFoundException();
    }

    const countryPib = countryExists.pib;

    for (let n of countryPib) {
      const number = Number(n);
      if (number % 2 == 0) {
        evenNumbers += number;
      } else {
        oddNumbers *= number;
      }
    }

    const password = sensediers + oddNumbers - evenNumbers;

    return { password };
  }
}
