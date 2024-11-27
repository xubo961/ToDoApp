import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PrdocutosInterface} from "../interfaces/prdocutos-interface";

@Injectable({
  providedIn: 'root'
})
export class EnviarProductosService {

  envioProductos: BehaviorSubject<PrdocutosInterface|null> = new BehaviorSubject<PrdocutosInterface|null>(null);
  envioProductos$: Observable<PrdocutosInterface|null> = this.envioProductos.asObservable();

  constructor() { }

  setEnvioProductos(envioProductos: PrdocutosInterface|null) {
    this.envioProductos.next(envioProductos);
  }
}
