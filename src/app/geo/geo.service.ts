import { Injectable } from '@angular/core';

import {Geo} from './geo';
import {GEO_INFO,COUNTRIES} from './geo.data'

@Injectable()
export class GeoService {
    getCountries(): string[]{
        return COUNTRIES;
    }
    getRegions(requested_country: String): string[]{
        var filteredRegions = GEO_INFO.filter(x => x.country == requested_country);
        return filteredRegions.map(x => x.name);
    }
}
