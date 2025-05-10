import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNNComponent } from './cnn.component';

describe('CNNComponent', () => {
  let component: CNNComponent;
  let fixture: ComponentFixture<CNNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CNNComponent]
    });
    fixture = TestBed.createComponent(CNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
