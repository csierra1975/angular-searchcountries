import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countryService: CountryService){};

  public countries: Country[]= [];

  searchByRegion(term: string): void {
    this.countryService.searchRegion(term).subscribe(
        resp =>{
          this.countries = resp;
            console.log(this.countries)
          }
    );
  }
}
