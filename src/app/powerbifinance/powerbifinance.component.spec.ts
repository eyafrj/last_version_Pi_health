import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbifinanceComponent } from './powerbifinance.component';

describe('PowerbifinanceComponent', () => {
  let component: PowerbifinanceComponent;
  let fixture: ComponentFixture<PowerbifinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerbifinanceComponent]
    });
    fixture = TestBed.createComponent(PowerbifinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
