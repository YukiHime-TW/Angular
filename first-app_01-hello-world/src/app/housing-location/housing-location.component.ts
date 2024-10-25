import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housingLocation";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="listing">
      <img 
          class="listing-photo"
          [src]="housingLocation.photo" 
          alt="Exterior photo of {{ housingLocation.name }}" 
          crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
