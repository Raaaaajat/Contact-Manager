import { TestBed } from '@angular/core/testing';

import { ContactpService } from './contactp.service';

describe('ContactpService', () => {
  let service: ContactpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
