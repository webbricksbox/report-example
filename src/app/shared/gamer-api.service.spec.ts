import { TestBed } from '@angular/core/testing';

import { GamerApiService } from './gamer-api.service';

describe('GamerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamerApiService = TestBed.get(GamerApiService);
    expect(service).toBeTruthy();
  });
});
