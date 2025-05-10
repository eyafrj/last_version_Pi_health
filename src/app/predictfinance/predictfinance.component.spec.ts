import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictfinanceComponent } from './predictfinance.component';

describe('PredictfinanceComponent', () => {
  let component: PredictfinanceComponent;
  let fixture: ComponentFixture<PredictfinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictfinanceComponent]
    });
    fixture = TestBed.createComponent(PredictfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
