import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './weather-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather App';

  constructor(private weatherService: WeatherService) {}

  cityName: string = '';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherData = response
        console.log(response);
      },
    });
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}

/*
!1 Importato il Service per utilizzare i suoi metodi
!2 Creazione di proprietà necessarie per prelevare i dati
!3 onInit inizializza il componente attivando il metodo del componente stesso
!4 Il metodo onSubmit del form attivba anch'esso il metodo del componente
!5 Il metodo principale che preleva il metodo del Service a cuii viene dato come argomento una stringa. Il metodo ritorna un Observable e quindi va eseguita una subscription per ottenere i dati necessari.
*/
