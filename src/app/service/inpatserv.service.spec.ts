import { TestBed } from '@angular/core/testing';

import { InpatservService } from './inpatserv.service';

describe('InpatservService', () => {
  let service: InpatservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpatservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
