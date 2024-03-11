import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  constructor(private countryService: CountryService){};

  public countries: Country[]= [];

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term).subscribe(
        resp =>{
          this.countries = resp;
            console.log(this.countries)
          }
    );
  }
}
