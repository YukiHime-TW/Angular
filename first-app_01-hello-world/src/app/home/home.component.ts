import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingService} from "../housing.service";
import {HousingLocation} from "../housingLocation";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <div>
        <input type="text" placeholder="Filter by city" #filter (keyup.enter)="filterResults(filter.value)" />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </div>
    </section>
    <section class="results">
      <app-housing-location
          *ngFor="let housingLocation of filteredLocationList"
          [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    console.log(text);
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList
        .filter((housingLocation) =>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }
}
