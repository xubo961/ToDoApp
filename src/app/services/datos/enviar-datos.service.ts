import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Datos} from "../interfaces/datos";

@Injectable({
  providedIn: 'root'
})
export class EnviarDatosService {

  datos: BehaviorSubject<Datos | null> = new BehaviorSubject<Datos | null>(null)
  info$: Observable<Datos|null> = this.datos.asObservable();

  constructor() { }

  actualizarDatos(info: Datos|null) {
    this.datos.next(info);
  }
}
