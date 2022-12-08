

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CountryService } from 'src/services/country.service';
import { CountryController } from 'src/controllers/country.controller';
import { CountryEntity } from 'src/models/domain/country.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
