export class Country {
  name: string;
  countryCode: string;
  currency: string;
  continent: string;

  constructor(name: string, countryCode: string, currency: string, continent: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.currency = currency;
    this.continent = continent;
  }
}