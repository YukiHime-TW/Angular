import {Component, Input} from '@angular/core';
import {Car} from '../../Model/Car';

@Component({
  selector: 'app-table-row-broken',
  standalone: true,
  imports: [],
  templateUrl: './table-row-broken.component.html',
  styleUrl: './table-row-broken.component.css'
})
export class TableRowBrokenComponent {
  @Input() car!: Car;
}
