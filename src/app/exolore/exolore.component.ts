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
  // countryCtrl: FormControl;
  // provinceCtrl: FormControl;
  // filteredCountries: any;
  // filteredPrvinces: any;
  countries: string[];
  selectedCountry: string;
  selectedProvince: string;
  selectedActivity: string;
  // countrySelected: true;

    activities: string[] = [
    'All',
    'Hiking',
    'Scrambling',
    'Rock Climbing',
    'Mountain Biking',
    'Water Sports',
    'Surfing',
    'Skiing/Snowboaring'
  ]


  constructor(private geoService: GeoService) {
    this.countries = geoService.getCountries();
    this.selectedCountry =  "";
    this.selectedProvince = "";
    this.selectedActivity = "";
    // this.countryCtrl = new FormControl();
    // this.provinceCtrl = new FormControl();
    // this.filteredCountries = this.countryCtrl.valueChanges
    //     .startWith(null)
    //     .map(name => this.filterCountries(name));
    // this.filteredPrvinces = this.provinceCtrl.valueChanges
    //   .startWith(null)
    //   .map(name => this.filterProvinces(name));
   }

  ngOnInit() {
    
  }

  //   filterCountries(val: string) {
  //   console.log(this.countryCtrl.value);
  //   return val ? this.countries.filter(s => new RegExp(`^${val}`, 'gi').test(s))
  //              : this.countries;
  // }

    displayProvinces(): boolean{
      return this.selectedCountry !=  null && this.selectedCountry != "";
    }

    getProvinces(): string[]{
      return this.geoService.getRegions(this.selectedCountry);
    }

  //   filterProvinces(val: string) {
  //   console.log(this.provinceCtrl.value);
  //   return val ? this.geoService.getRegions(this.countryCtrl.value).filter(s => new RegExp(`^${val}`, 'gi').test(s))
  //              : this.geoService.getRegions(this.countryCtrl.value);
  // }

}
