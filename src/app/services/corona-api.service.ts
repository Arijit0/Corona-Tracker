import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AppConstants } from '../AppConstants';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {

  constructor(private http:HttpClient) { }
 
   baseUrl = 'https://api.covid19api.com/';

  getCountriesData():Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl+"countries");
  }

  getCoronaRealtimeData(country):Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl+"country/"+country);
  }
}
