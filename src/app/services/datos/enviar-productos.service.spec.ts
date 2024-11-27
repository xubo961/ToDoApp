import { TestBed } from '@angular/core/testing';

import { EnviarProductosService } from './enviar-productos.service';

describe('EnviarProductosService', () => {
  let service: EnviarProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
