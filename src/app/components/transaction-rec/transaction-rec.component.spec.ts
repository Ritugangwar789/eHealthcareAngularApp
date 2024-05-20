import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRecComponent } from './transaction-rec.component';

describe('TransactionRecComponent', () => {
  let component: TransactionRecComponent;
  let fixture: ComponentFixture<TransactionRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionRecComponent]
    });
    fixture = TestBed.createComponent(TransactionRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
