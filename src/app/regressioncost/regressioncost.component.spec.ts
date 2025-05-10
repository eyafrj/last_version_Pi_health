import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressioncostComponent } from './regressioncost.component';

describe('RegressioncostComponent', () => {
  let component: RegressioncostComponent;
  let fixture: ComponentFixture<RegressioncostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegressioncostComponent]
    });
    fixture = TestBed.createComponent(RegressioncostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
