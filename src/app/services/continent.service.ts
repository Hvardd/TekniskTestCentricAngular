import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Continent } from '../models/api_models/Continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  private baseApiUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }


  getContinents(): Observable<Continent[]> {
    return this.httpClient.get<Continent[]>(this.baseApiUrl + '/continents');
  }

  createContinent(continent: Continent) : Observable<Continent> {
    return this.httpClient.post<Continent>(this.baseApiUrl + '/continents/add', continent);
  }
}
