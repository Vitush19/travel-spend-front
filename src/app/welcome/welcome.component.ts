import { Component, OnInit } from '@angular/core';
import { TravelComponent } from '../travel/travel.component';
import { TravelService } from '../travel/travel.service';
import { TravelAddComponent } from '../travel/travel-add/travel-add.component';
import { CountryService } from '../country/country.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [TravelComponent, TravelAddComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  constructor(private travelService: TravelService,
    private countryService: CountryService) {
  }

  ngOnInit() {
    this.travelService.getTravels().subscribe(travels => {
      console.log(travels);
    });

  this.countryService.getCountries().subscribe(
    countries => {
      console.log(countries);
      this.countryService.setData(countries);
    }
  );
  }
}
