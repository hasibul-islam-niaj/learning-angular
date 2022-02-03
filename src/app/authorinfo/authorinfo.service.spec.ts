import { TestBed } from '@angular/core/testing';

import { AuthorinfoService } from './authorinfo.service';

describe('AuthorinfoService', () => {
  let service: AuthorinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
