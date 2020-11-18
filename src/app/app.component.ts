import { Component,OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CoronaApiService } from './services/corona-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries:any;
  country:any; 
  totalCase:any = "No Data";
  totalRecovered:any = "No Data";
  totalDeaths:any = "No Data";
  isClicked: boolean = false;
  darkMode: any;
  isFound: boolean = true;
  loaderShow: boolean = false;

  constructor(private CoronaServiceApiService: CoronaApiService) {}

  ngOnInit() {
    this.loaderShow = true;
   this.coronaDataFromCountries();
  }

  coronaDataFromCountries() {
    this.CoronaServiceApiService.getCountriesData().subscribe(res => {
      this.countries = res; 
      this.loaderShow = false;
    })
  }

  selectedCountry(country:any) {
    this.country = country;
  }

  getCoronaData() {

    this.loaderShow = true;
    let selCountry;
      if(!this.country) {
        this.totalCase;
        this.totalRecovered;
        this.totalDeaths;
      }else{
        selCountry = this.country;
      }
  
    this.CoronaServiceApiService.getCoronaRealtimeData(selCountry).subscribe(data => {
     
      this.loaderShow = false;
        this.isFound = true;
        let index = data.length - 1;
        this.totalCase = data[index].Confirmed;
        this.totalRecovered = data[index].Recovered;
        this.totalDeaths = data[index].Deaths;
      

    },
    (error) => {
      this.loaderShow = false;
      // if(error.message == "Not Found") {
      //   this.isFound = false;
      // }
    })
  }

  onClick(value) {
    if(value == 'moon'){
      this.isClicked = true;
    } else {
      this.isClicked = false;
    }
  }

}
