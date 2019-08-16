import { TestBed } from '@angular/core/testing';

import { ForpagoService } from './forpago.service';

describe('ForpagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForpagoService = TestBed.get(ForpagoService);
    expect(service).toBeTruthy();
  });
});
