import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressioncostfinanceComponent } from './regressioncostfinance.component';

describe('RegressioncostfinanceComponent', () => {
  let component: RegressioncostfinanceComponent;
  let fixture: ComponentFixture<RegressioncostfinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegressioncostfinanceComponent]
    });
    fixture = TestBed.createComponent(RegressioncostfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
