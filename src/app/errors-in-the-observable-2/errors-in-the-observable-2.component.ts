import { Component, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-errors-in-the-observable-2',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './errors-in-the-observable-2.component.scss',
  templateUrl: './errors-in-the-observable-2.component.html'
})
export class ErrorsInTheObservable2Component {
  httpClient = inject(HttpClient);
  changeDetectorRef = inject(ChangeDetectorRef);
  httpData: unknown = null;
  errorMessage = '';

  getTodo(num: number) {
    this.httpClient
      .get<{
        userId: string;
        id: number;
        title: string;
        completed: boolean;
      }>(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          return of(null);
        })
      )
      .subscribe((result) => {
        this.httpData = result;
        this.changeDetectorRef.detectChanges();
      });
  }
}
