import { TestBed, inject } from '@angular/core/testing';

import { CadastrarViagemService } from './cadastrar-viagem.service';

describe('CadastrarViagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrarViagemService]
    });
  });

  it('should be created', inject([CadastrarViagemService], (service: CadastrarViagemService) => {
    expect(service).toBeTruthy();
  }));
});
