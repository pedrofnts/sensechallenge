import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CountryEntity } from './country.entity';

@Entity("City")
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column('boolean')
  capital: boolean;

  @Column()
  population: number;

  @ManyToOne(() => CountryEntity, (CountryEntity) => CountryEntity.cities)
  country: CountryEntity
}
