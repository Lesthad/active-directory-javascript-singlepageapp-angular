import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-callwebapi',
  templateUrl: './callwebapi.component.html',
  styleUrls: ['./callwebapi.component.css']
})
export class CallwebapiComponent implements OnInit {
  weatherList: any;

  constructor(private authService: MsalService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast(): void {
    this.http.get('https://demoazuread.azure-api.net/v1/weatherforecast')
    .subscribe({
      next: (data) => {
        //console.log(`data: ${JSON.stringify(data)}`);
        this.weatherList = data;
      },
      error: (err: any) => {
        console.log(`Error to get weatherforecast: ${err}`);
      }
    });
  }

}
