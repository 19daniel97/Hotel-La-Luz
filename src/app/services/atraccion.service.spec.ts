import { TestBed } from '@angular/core/testing';

import { AtraccionService } from './atraccion.service';

describe('atraccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtraccionService = TestBed.get(AtraccionService);
    expect(service).toBeTruthy();
  });
});
