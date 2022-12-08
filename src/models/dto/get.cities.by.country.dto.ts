export class GetCitiesByCountryDto {
    countryId: string;

    name: string;

    capital: boolean;

    initialPopulation: string;

    finalPopulation: string;

    order: Order
}

export enum Order {
    ASC = 'ASC',
    DESC = 'DESC'
  }
