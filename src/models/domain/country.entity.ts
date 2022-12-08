import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CityEntity } from './city.entity';

@Entity('Country')
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column()
  pib: string;

  @Column()
  sensedia: boolean;

  @OneToMany(() => CityEntity, (CityEntity) => CityEntity.country)
  cities: CityEntity[];
}
