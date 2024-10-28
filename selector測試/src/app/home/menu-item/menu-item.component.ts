import { Component } from '@angular/core';

@Component({
  selector: '.menu-item',
  standalone: true,
  imports: [],
  template:`
    <div>This is a menu item component</div>
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
