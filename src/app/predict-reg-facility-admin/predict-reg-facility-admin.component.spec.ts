import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictRegFacilityAdminComponent } from './predict-reg-facility-admin.component';

describe('PredictRegFacilityAdminComponent', () => {
  let component: PredictRegFacilityAdminComponent;
  let fixture: ComponentFixture<PredictRegFacilityAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictRegFacilityAdminComponent]
    });
    fixture = TestBed.createComponent(PredictRegFacilityAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
