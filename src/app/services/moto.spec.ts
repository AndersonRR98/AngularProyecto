import { TestBed } from '@angular/core/testing';

import { Moto } from './moto';

describe('Moto', () => {
  let service: Moto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
