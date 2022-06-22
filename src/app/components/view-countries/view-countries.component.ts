import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Country } from 'src/app/models/ui-models/Country';
import { MatSort } from '@angular/material/sort';
import { CountryService } from 'src/app/services/country.service';




@Component({
  selector: 'app-view-countries',
  templateUrl: './view-countries.component.html',
  styleUrls: ['./view-countries.component.scss']
})
export class ViewCountriesComponent implements OnInit {

  displayedColumns: string[] = ['Country', 'Continent'];
  countries: Country[] = [];

  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  filterString = "";


  constructor(private readonly countryService: CountryService) { }

  ngOnInit(): void {




    this.countryService.getCountries().subscribe(
     (successResponse) => {
        console.log(successResponse);
        this.countries = successResponse;
        this.dataSource = new MatTableDataSource<Country>(this.countries);

        this.dataSource.paginator = this.matPaginator;
        this.dataSource.sort = this.matSort;
      }
    );


  }

  filterCountries() {
    this.dataSource.filter = this.filterString.trim().toLocaleLowerCase();
  }

  announceSortChange(event: any) {
  }

}
