import { Routes } from '@angular/router';
import { TheObservableItself1Component } from './tutorials/the-observable-itself-1/the-observable-itself-1.component';

export const routes: Routes = [
  {
    path: 'observable-itself',
    component: TheObservableItself1Component,
    data: { page: 1 }
  },
];
