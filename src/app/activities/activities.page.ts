import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  countries: any = [];
  constructor(
    public countriesService: CountriesService
  ) {
      this.getCounters();
  }

  async getCounters() {
    this.countries = await this.countriesService.getData().toPromise();
    console.log('COUNS', this.countries);
  }


  ngOnInit() {
  }

}
