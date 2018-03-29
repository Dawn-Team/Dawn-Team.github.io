import { TestBed, inject } from '@angular/core/testing';

import { PlatformStatusService } from './platform-status.service';

describe('PlatformStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformStatusService]
    });
  });

  it('should be created', inject([PlatformStatusService], (service: PlatformStatusService) => {
    expect(service).toBeTruthy();
  }));
});
