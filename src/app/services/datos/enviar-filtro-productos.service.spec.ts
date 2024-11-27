import { TestBed } from '@angular/core/testing';

import { EnviarFiltroProductosService } from './enviar-filtro-productos.service';

describe('EnviarFiltroProductosService', () => {
  let service: EnviarFiltroProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarFiltroProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
