import { Component } from '@angular/core';
import {TableRowBrokenComponent} from './table-row-broken/table-row-broken.component';
import {TableRowComponent} from './table-row/table-row-component';
import {Car} from '../Model/Car';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-seletor-with-table',
  standalone: true,
  imports: [TableRowBrokenComponent, NgForOf, TableRowComponent],
  templateUrl: './selector-with-table.component.html',
  styleUrl: './selector-with-table.component.css'
})
export class SelectorWithTableComponent {
  cars = [{
    id: "1",
    name: "保時捷",
    color: "red"
  }, {
    id: "2",
    name: "Ferrari",
    color: "blue"
  }]
}
