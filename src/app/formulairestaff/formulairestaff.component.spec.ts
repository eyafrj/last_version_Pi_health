import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairestaffComponent } from './formulairestaff.component';

describe('FormulairestaffComponent', () => {
  let component: FormulairestaffComponent;
  let fixture: ComponentFixture<FormulairestaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulairestaffComponent]
    });
    fixture = TestBed.createComponent(FormulairestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
