import { TestBed } from '@angular/core/testing';

import { OcupacionService } from './ocupacion.service';

describe('OcupacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcupacionService = TestBed.get(OcupacionService);
    expect(service).toBeTruthy();
  });
});
