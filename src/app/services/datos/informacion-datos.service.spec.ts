import { TestBed } from '@angular/core/testing';

import { InformacionDatosService } from './informacion-datos.service';

describe('InformacionDatosService', () => {
  let service: InformacionDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
