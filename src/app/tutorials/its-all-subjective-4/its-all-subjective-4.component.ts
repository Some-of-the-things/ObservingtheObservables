import { Component, OnInit } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-its-all-subjective-4',
  standalone: true,
  imports: [],
  templateUrl: './its-all-subjective-4.component.html',
  styleUrl: './its-all-subjective-4.component.scss',
})
export class ItsAllSubjective4Component {
  replaySubject$ = new ReplaySubject();
  asyncSubject$ = new AsyncSubject();
  voidSubject$ = new Subject<void>();

  defaultReplay() {
    this.replaySubject$.next('Is what we think we know real?');
    this.replaySubject$.next('We remember so much');
    this.replaySubject$.next('but what is memory?');
    this.replaySubject$.subscribe(console.log);
    this.replaySubject$.next('Thoughts that echo.');
  }

  replayNumber() {
    this.replaySubject$ = new ReplaySubject(2);
    this.replaySubject$.next(
      'All these moments will be lost like tears in rain'
    );
    this.replaySubject$.next('...');
    this.replaySubject$.next('but what is memory?');

    this.replaySubject$.subscribe(console.log);

    this.replaySubject$.next('Thoughts that echo truths and falsehoods.');
    this.replaySubject$.next('Is what we think we know real?');
    this.replaySubject$.next(
      'What bridges the gap between subjective experience and objective knowledge?'
    );
  }

  replayTime() {
    this.replaySubject$ = new ReplaySubject(3, 200);
    setTimeout(
      () => this.replaySubject$.next("Hurry up please it's time."),
      200
    );
    this.replaySubject$.next(
      'Days and nights pass and ages bloom and fade like flowers.'
    );
    setTimeout(() => {
      this.replaySubject$.subscribe(console.log);
    }, 201);
  }

  asyncSubject() {
    this.asyncSubject$.subscribe(console.log);
    this.asyncSubject$.next('Moonlight on water');
    this.asyncSubject$.next('A spider\'s web reflection');
    this.asyncSubject$.complete();
    this.asyncSubject$.next('Is gone by the dawn.')
  }

  voidSubject() {
    this.voidSubject$.subscribe(() => console.log('-- nothing.'));
    this.voidSubject$.next();
  }
}
