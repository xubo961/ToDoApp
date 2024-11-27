import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviarFiltroProductosService {

  filtro: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(Boolean(""));
  filtro$: Observable<boolean> = this.filtro.asObservable();

  constructor() { }

  setFiltro(filtro: BehaviorSubject<boolean>) {
    this.filtro = filtro;
  }
}
