import { Routes } from '@angular/router';
import { TheObservableItself1Component } from './tutorials/the-observable-itself-1/the-observable-itself-1.component';
import { ErrorsInTheObservable2Component } from './errors-in-the-observable-2/errors-in-the-observable-2.component';

export const routes: Routes = [
  {
    path: 'observable-itself',
    component: TheObservableItself1Component,
    data: { page: 1, title: 'The Observable Itself' },
  },
  {
    path: 'observable-errors',
    component: ErrorsInTheObservable2Component,
    data: { page: 2, title: 'Errors in the Observable'},
  }
];
