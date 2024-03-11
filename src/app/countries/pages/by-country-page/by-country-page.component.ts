import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor(private countryService: CountryService){};

  public countries: Country[]= [];

  searchByCountry(term: string): void {
    this.countryService.searchCountry(term).subscribe(
        resp =>{
          this.countries = resp;
            console.log(this.countries)
          }
    );
  }
}
