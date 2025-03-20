import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Country } from '../models/country.model';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly httpClient = inject(HttpClient);

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<any[]>(environment.COUNTRIES_API_URL).pipe(
      map((result) =>
        result.map((country) => ({
          name: country.name.official,
          population: country.population,
          capital: country?.capital?.at(0),
          flag: country?.flags?.png,
        }))
      )
    );
  }

  getCountryByName(name: string): Observable<Country | undefined> {
    return this.getCountries().pipe(
      map((countries) => countries.find((country) => country.name === name))
    );
  }
}
