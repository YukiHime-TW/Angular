import { Component } from '@angular/core';
import { MenuItemComponent} from './menu-item/menu-item.component';
import { AppExampleComponent } from './app-example/app-example.component';
import { TypeSelectorComponent } from './type-selector/type-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuItemComponent, AppExampleComponent, TypeSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
