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
} from '@nestjs/common';
import { CountryEntity } from 'src/models/domain/country.entity';
import { GetPasswordDto } from 'src/models/dto/get.password';
import { CountryService } from 'src/services/country.service';

@Controller('/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  public async getAll(): Promise<CountryEntity[]> {
    return this.countryService.findAll();
  }

  @Get(':countryId/passwords')
  public async getCountryPasswords(@Param('countryId') countryId: string,): Promise<GetPasswordDto> {
    return this.countryService.getCountryPasswords(countryId);
  }
}
