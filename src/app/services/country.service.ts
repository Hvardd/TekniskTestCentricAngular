import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/api_models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseApiUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  getCountries() {
    return this.httpClient.get<Country[]>(this.baseApiUrl + '/countries')
  }

  createCountry(country: Country) : Observable<Country> {
    return this.httpClient.post<Country>(this.baseApiUrl + '/countries/add', country);
  }
}
