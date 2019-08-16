import { TestBed } from '@angular/core/testing';

import { TipohabService } from './tipohab.service';

describe('TipohabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipohabService = TestBed.get(TipohabService);
    expect(service).toBeTruthy();
  });
});
