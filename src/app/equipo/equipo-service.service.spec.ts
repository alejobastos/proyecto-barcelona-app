import { TestBed, inject } from '@angular/core/testing';

import { EquipoServiceService } from './equipo-service.service';

describe('EquipoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipoServiceService]
    });
  });

  it('should be created', inject([EquipoServiceService], (service: EquipoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
