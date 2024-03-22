import { TestBed } from '@angular/core/testing';

import { CgfpService } from './cgfp.service';

describe('CgfpService', () => {
  let service: CgfpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgfpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
