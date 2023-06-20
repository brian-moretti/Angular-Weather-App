import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //per http request
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../weather-interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  url: string = 'https://open-weather-map27.p.rapidapi.com/weather';

  weatherAPILabel: string = 'X-RapidAPI-Host';
  weatherAPIValue: string = 'openweather43.p.rapidapi.com';
  //* STUDIARE DOCS RAPID API
  weatherKeyLabel: string = 'X-RapidAPI-Key';
  weatherKeyValue: string =
    '1940fd7170msh2713726f8a7769bp15a32djsn3526b961659e';

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.url, {
      //* STUDIARE HTTP
      headers: new HttpHeaders() //* .SET()????
        .set(this.weatherAPILabel, this.weatherAPIValue)
        .set(this.weatherKeyLabel, this.weatherKeyValue),
      params: new HttpParams()
        .set('q', city)
        .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
        .set('units', 'metric'),
      //.set('mode', 'json'),
    });
  }
}

/*
!1 Importato il modulo HttpClient per utilizzare i metodi http
!2 Il metodo ritorna un Observable di tipo Interface scritta nel Service. Vengono settati gli Headers e i Param in accordo con la docs dell'API
*/
