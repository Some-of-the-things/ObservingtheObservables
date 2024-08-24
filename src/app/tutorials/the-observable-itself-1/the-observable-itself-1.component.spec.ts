import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheObservableItself1Component } from './the-observable-itself-1.component';

describe('TheObservableItself1Component', () => {
  let component: TheObservableItself1Component;
  let fixture: ComponentFixture<TheObservableItself1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheObservableItself1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheObservableItself1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
