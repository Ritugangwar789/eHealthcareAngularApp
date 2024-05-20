import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsupdateComponent } from './roomsupdate.component';

describe('RoomsupdateComponent', () => {
  let component: RoomsupdateComponent;
  let fixture: ComponentFixture<RoomsupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsupdateComponent]
    });
    fixture = TestBed.createComponent(RoomsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
