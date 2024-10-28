import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SelectorWithTableComponent} from './seletor-with-table/selector-with-table.component';

export const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  title: 'Home page',
},{
  path: 'selector',
  component: SelectorWithTableComponent,
  title: 'Selector with Table',
},];
