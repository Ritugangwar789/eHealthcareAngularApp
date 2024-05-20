import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorupdsComponent } from './doctorupds.component';

describe('DoctorupdsComponent', () => {
  let component: DoctorupdsComponent;
  let fixture: ComponentFixture<DoctorupdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorupdsComponent]
    });
    fixture = TestBed.createComponent(DoctorupdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
