import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = "http://localhost:8080/country";

  private countries: Country[] = [];

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  setData(countries: Country[]): void {
    this.countries = countries;
  }

  getData(): Country[] {
    return this.countries;
  }
}
