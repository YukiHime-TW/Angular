import { Component } from '@angular/core';

@Component({
  selector: '.menu-item',
  standalone: true,
  imports: [],
  template:`
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    div {
      background-color: lightblue;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }
  `,
})
export class MenuItemComponent {

}
