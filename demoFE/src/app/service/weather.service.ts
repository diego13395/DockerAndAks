import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getWeather(): Observable<WeatherForecast[]> {
    return this._http
      .get(`${environment.apiRoot}/api/WeatherForeCast/getWeather`)
      .pipe(
        take(1),
        map((res) => {
          return res as WeatherForecast[];
        })
      );
  }
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
