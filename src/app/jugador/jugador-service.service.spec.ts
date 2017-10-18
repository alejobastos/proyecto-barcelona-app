import { TestBed, inject } from '@angular/core/testing';

import { JugadorServiceService } from './jugador-service.service';

describe('JugadorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadorServiceService]
    });
  });

  it('should be created', inject([JugadorServiceService], (service: JugadorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
