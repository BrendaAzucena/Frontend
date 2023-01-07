import { TestBed } from '@angular/core/testing';

import { ClienteSerService } from './cliente-ser.service';

describe('ClienteSerService', () => {
  let service: ClienteSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
