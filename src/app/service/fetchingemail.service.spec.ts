import { TestBed } from '@angular/core/testing';

import { FetchingemailService } from './fetchingemail.service';

describe('FetchingemailService', () => {
  let service: FetchingemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
