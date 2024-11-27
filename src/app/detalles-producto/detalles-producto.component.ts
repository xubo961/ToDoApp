import {Component, OnInit} from '@angular/core';
import {PrdocutosInterface} from "../services/interfaces/prdocutos-interface";
import {EnviarProductosService} from "../services/datos/enviar-productos.service";

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.scss'
})
export class DetallesProductoComponent implements OnInit {
  envioProductos: PrdocutosInterface|null = null;

  constructor(
      private enviarProductosService: EnviarProductosService,)
  {}

  ngOnInit() {
    this.enviarProductosService.envioProductos$.subscribe(enviarProductos => {
      this.envioProductos = enviarProductos;
    })
  }
}
