import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { ViewCountriesComponent } from './components/view-countries/view-countries.component';

const routes: Routes = [
  {
    path: 'add-country',
    component: AddCountryComponent
  },
  {
    path: '',
    component: ViewCountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
