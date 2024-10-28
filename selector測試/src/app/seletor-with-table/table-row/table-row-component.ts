import {Component, Input} from '@angular/core';
import {Car} from '../../Model/Car';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './table-row-component.html',
  styleUrl: './table-row-component.css'
})
export class TableRowComponent {
  @Input() car!: Car;
}
