import { Routes } from '@angular/router';
import { TheObservableItself1Component } from './tutorials/the-observable-itself-1/the-observable-itself-1.component';
import { ErrorsInTheObservable2Component } from './tutorials/errors-in-the-observable-2/errors-in-the-observable-2.component';
import { ChangingTheSubject3Component } from './tutorials/changing-the-subject-3/changing-the-subject-3.component';
import { ItsAllSubjective4Component } from './tutorials/its-all-subjective-4/its-all-subjective-4.component';

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
  },
  {
    path: 'change-the-subject',
    component: ChangingTheSubject3Component,
    data: { page: 3, title: 'Changing the Subject'},
  },
  {
    path: 'its-all-subjective',
    component: ItsAllSubjective4Component,
    data: { page: 4, title: 'Its all Subjective'},
  }
];
