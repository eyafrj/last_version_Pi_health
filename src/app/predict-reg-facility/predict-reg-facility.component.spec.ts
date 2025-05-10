import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictRegFacilityComponent } from './predict-reg-facility.component';

describe('PredictRegFacilityComponent', () => {
  let component: PredictRegFacilityComponent;
  let fixture: ComponentFixture<PredictRegFacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictRegFacilityComponent]
    });
    fixture = TestBed.createComponent(PredictRegFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
