import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientComponent } from './outpatient.component';

describe('OutpatientComponent', () => {
  let component: OutpatientComponent;
  let fixture: ComponentFixture<OutpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutpatientComponent]
    });
    fixture = TestBed.createComponent(OutpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
