import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsAllSubjective4Component } from './its-all-subjective-4.component';

describe('ItsAllSubjective4Component', () => {
  let component: ItsAllSubjective4Component;
  let fixture: ComponentFixture<ItsAllSubjective4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItsAllSubjective4Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItsAllSubjective4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
