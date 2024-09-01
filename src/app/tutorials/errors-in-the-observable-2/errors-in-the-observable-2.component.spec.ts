import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsInTheObservable2Component } from './errors-in-the-observable-2.component';

describe('ErrorsInTheObservable2Component', () => {
  let component: ErrorsInTheObservable2Component;
  let fixture: ComponentFixture<ErrorsInTheObservable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsInTheObservable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsInTheObservable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
