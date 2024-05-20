import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsFacilitiesComponent } from './doctors-facilities.component';

describe('DoctorsFacilitiesComponent', () => {
  let component: DoctorsFacilitiesComponent;
  let fixture: ComponentFixture<DoctorsFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsFacilitiesComponent]
    });
    fixture = TestBed.createComponent(DoctorsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
