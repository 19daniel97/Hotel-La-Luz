import { TestBed } from '@angular/core/testing';

import { InfogenService } from './infogen.service';

describe('InfogenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfogenService = TestBed.get(InfogenService);
    expect(service).toBeTruthy();
  });
});
