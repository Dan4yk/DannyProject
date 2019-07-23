import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IData {
      id: number;
      countryname: string;
      countryprice: number;
      countryimage: string;
      countryreducere: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private dataJson = 'assets/country.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.dataJson);
}
}

