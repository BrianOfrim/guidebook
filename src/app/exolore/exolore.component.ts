import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

import {GeoService} from '../geo/geo.service';
@Component({
  selector: 'app-exolore',
  templateUrl: './exolore.component.html',
  styleUrls: ['./exolore.component.css']
})
export class ExoloreComponent implements OnInit {
  countryCtrl: FormControl;
  filteredCountries: any;
  countries: string[];
  selectedCountry: string;
  countrySelected: true;


  constructor(private geoService: GeoService) {
    this.countries = geoService.getCountries();
    this.countryCtrl = new FormControl();

    this.filteredCountries = this.countryCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterCountries(name));
   }

  ngOnInit() {
    
  }

    filterCountries(val: string) {
    console.log(this.countryCtrl.value);
    return val ? this.countries.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.countries;
  }

}
