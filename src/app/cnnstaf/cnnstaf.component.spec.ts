import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnnstafComponent } from './cnnstaf.component';

describe('CnnstafComponent', () => {
  let component: CnnstafComponent;
  let fixture: ComponentFixture<CnnstafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnnstafComponent]
    });
    fixture = TestBed.createComponent(CnnstafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
