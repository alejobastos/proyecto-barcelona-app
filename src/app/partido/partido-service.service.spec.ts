import { TestBed, inject } from '@angular/core/testing';

import { PartidoServiceService } from './partido-service.service';

describe('PartidoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidoServiceService]
    });
  });

  it('should be created', inject([PartidoServiceService], (service: PartidoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
