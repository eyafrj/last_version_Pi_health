import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictRegressionComponent } from './predict-regression.component';

describe('PredictRegressionComponent', () => {
  let component: PredictRegressionComponent;
  let fixture: ComponentFixture<PredictRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictRegressionComponent]
    });
    fixture = TestBed.createComponent(PredictRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
