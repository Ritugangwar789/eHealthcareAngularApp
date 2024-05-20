import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFacilitiesComponent } from './test-facilities.component';

describe('TestFacilitiesComponent', () => {
  let component: TestFacilitiesComponent;
  let fixture: ComponentFixture<TestFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFacilitiesComponent]
    });
    fixture = TestBed.createComponent(TestFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
