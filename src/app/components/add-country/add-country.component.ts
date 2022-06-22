import { Component, OnInit } from '@angular/core';
import { Continent } from 'src/app/models/ui-models/Continent';
import { Country } from 'src/app/models/ui-models/Country';
import { ContinentService } from 'src/app/services/continent.service';
import { CountryService } from 'src/app/services/country.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  continentList: Continent[] = [];

  continent: Continent = {
    id: undefined,
    name: ''
  }

  country: Country = {
    id: undefined,
    name: '',
    continentId: undefined,
    continent: {
      id: undefined,
      name: ''
    }

  }

  constructor(private readonly continentService: ContinentService, private readonly countryService: CountryService) { }

  ngOnInit(): void {

    this.continentService.getContinents().subscribe(
      (successResponse) => {
        this.continentList = successResponse;
        console.log(this.continentList);
        this.continentList = _.uniqBy(this.continentList,'name');
      }
    )

  }

onAddContinent(): void{
  if (this.continent.name) {
   this.continentService.createContinent(this.continent).subscribe(
    (successResponse) => {
      console.log("success");
      window.location.reload();
    }
  )
 }
}

onAddCountry() {
  console.log(this.country);
  this.countryService.createCountry(this.country).subscribe(
    (successResponse) => {
      console.log("success");
      window.location.reload();
    }
  )
}


}

