import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';


@Component({
  selector: 'app-changing-the-subject-3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './changing-the-subject-3.component.html',
  styleUrl: './changing-the-subject-3.component.scss'
})
export class ChangingTheSubject3Component implements OnInit {
  subject$ = new Subject<string>();
  behaviorSubject$ = new BehaviorSubject<string>('Your behavior');
  subjectSubscription$ = new Subscription();
  behaviorSubscription$ = new Subscription();

  subjectChange: string = '';
  theSubject: string | null = null;
  behavior = false;

  ngOnInit() {
    this.#subjectSubscribe();
  }

  changeSubject() {
    if (this.behavior) {
      this.behaviorSubject$.next(this.subjectChange);
    } else {
      this.subject$.next(this.subjectChange);
    }
  }

  forgetSubject() {
    this.theSubject = null;
    this.behaviorSubject$ = new BehaviorSubject('Your behavior');
    this.subject$ = new Subject();
    if (this.behavior) {
      this.#behaviourSubjectSubscribe();
    } else {
      this.#subjectSubscribe();
    }
  }

  changeBehavior() {
    if (!this.behavior) {
      this.subjectSubscription$.unsubscribe();
      this.behaviorSubscription$ = this.behaviorSubject$.subscribe((sub) => {
        this.theSubject = sub;
      });
    } else {
      this.#subjectSubscribe();
      this.behaviorSubscription$.unsubscribe();
    }
    this.behavior = !this.behavior;
  }

  #subjectSubscribe() {
    this.subjectSubscription$ = this.subject$.subscribe((sub) => {
      this.theSubject = sub;
    });
  }

  #behaviourSubjectSubscribe() {
    this.behaviorSubscription$ = this.behaviorSubject$.subscribe((sub) => {
      this.theSubject = sub;
    });
  }
}
