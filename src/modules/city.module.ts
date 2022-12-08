import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CityService } from 'src/services/city.service';
import { CityController } from 'src/controllers/city.controller';
import { CityEntity } from 'src/models/domain/city.entity';
import { CountryEntity } from 'src/models/domain/country.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CityEntity]), TypeOrmModule.forFeature([CountryEntity])],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
