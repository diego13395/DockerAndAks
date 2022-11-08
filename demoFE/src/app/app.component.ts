import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherForecast, WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weather: WeatherForecast[];
  title = environment.title;

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((res) => (this.weather = res));
  }
}
