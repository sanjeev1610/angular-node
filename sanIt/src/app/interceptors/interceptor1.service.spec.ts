import { TestBed } from '@angular/core/testing';

import { Interceptor1Service } from './interceptor1.service';

describe('Interceptor1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Interceptor1Service = TestBed.get(Interceptor1Service);
    expect(service).toBeTruthy();
  });
});
