import { IsString, IsInt, Min, MaxLength, IsBoolean,  } from 'class-validator';

export class CitySchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsBoolean()
  capital: boolean;

  @IsInt()
  @Min(1)
  population: number;
}
