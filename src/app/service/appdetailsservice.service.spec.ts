import { TestBed } from '@angular/core/testing';

import { AppdetailsserviceService } from './appdetailsservice.service';

describe('AppdetailsserviceService', () => {
  let service: AppdetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppdetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
