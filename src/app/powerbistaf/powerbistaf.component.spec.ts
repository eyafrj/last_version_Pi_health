import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbistafComponent } from './powerbistaf.component';

describe('PowerbistafComponent', () => {
  let component: PowerbistafComponent;
  let fixture: ComponentFixture<PowerbistafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerbistafComponent]
    });
    fixture = TestBed.createComponent(PowerbistafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
