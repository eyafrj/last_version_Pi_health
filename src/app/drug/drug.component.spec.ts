import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugComponent } from './drug.component';

describe('DrugComponent', () => {
  let component: DrugComponent;
  let fixture: ComponentFixture<DrugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugComponent]
    });
    fixture = TestBed.createComponent(DrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
