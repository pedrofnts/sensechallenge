import { IsString, IsInt, Min, MaxLength, IsEmail, IsBoolean, IsUUID } from 'class-validator';

export class CountrySchema {
  @IsUUID()
  id: string;

  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  pib: string;

  @IsBoolean()
  sensedia: boolean;

}
