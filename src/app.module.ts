import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryRunner } from 'typeorm';
import { CityModule } from './modules/city.module';
import { CountryModule } from './modules/country.module';


@Module({
  imports: [CountryModule, CityModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
