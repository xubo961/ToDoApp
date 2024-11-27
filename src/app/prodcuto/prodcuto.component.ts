import { Component } from '@angular/core';
import {PrdocutosInterface} from "../services/interfaces/prdocutos-interface";
import {Router} from "@angular/router";
import {EnviarProductosService} from "../services/datos/enviar-productos.service";

@Component({
  selector: 'app-prodcuto',
  templateUrl: './prodcuto.component.html',
  styleUrl: './prodcuto.component.scss'
})
export class ProdcutoComponent {

  producto: PrdocutosInterface[] = [
    {id: 1, nombre: "ColaCao", precio: 5, stock: true},
    {id: 2, nombre: "Leche", precio: 2, stock: false},
    {id: 3, nombre: "Cereales", precio: 3, stock: false},
    {id: 4, nombre: "Patatas", precio: 10, stock: true},
    {id: 5, nombre: "Espaguetis", precio: 8, stock: true}
  ]

  constructor(
      private router: Router,
      private enviarProductosService: EnviarProductosService,
  ) {
  }

  enviarProducto(producto: PrdocutosInterface) {
    this.enviarProductosService.setEnvioProductos(producto);
    this.router.navigate(['detallesProductos']);
  }

}
