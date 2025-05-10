import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlstaffComponent } from './mlstaff.component';

describe('MlstaffComponent', () => {
  let component: MlstaffComponent;
  let fixture: ComponentFixture<MlstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlstaffComponent]
    });
    fixture = TestBed.createComponent(MlstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
