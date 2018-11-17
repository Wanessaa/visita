import { TestBed, inject } from '@angular/core/testing';

import { ViagemTecnicaService } from './viagem-tecnica.service';

describe('ViagemTecnicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViagemTecnicaService]
    });
  });

  it('should be created', inject([ViagemTecnicaService], (service: ViagemTecnicaService) => {
    expect(service).toBeTruthy();
  }));
});
