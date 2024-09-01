import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingTheSubject2Component } from './changing-the-subject-3.component';

describe('ChangingTheSubject2Component', () => {
  let component: ChangingTheSubject2Component;
  let fixture: ComponentFixture<ChangingTheSubject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangingTheSubject2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangingTheSubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
