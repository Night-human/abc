import { TestBed } from '@angular/core/testing';

import { AbcBackService } from './abc-back.service';

describe('AbcBackService', () => {
  let service: AbcBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
