import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictRegressionstaffComponent } from './predict-regressionstaff.component';

describe('PredictRegressionstaffComponent', () => {
  let component: PredictRegressionstaffComponent;
  let fixture: ComponentFixture<PredictRegressionstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictRegressionstaffComponent]
    });
    fixture = TestBed.createComponent(PredictRegressionstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
