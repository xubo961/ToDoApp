import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EnviarFiltroProductosService} from "../services/datos/enviar-filtro-productos.service";

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.scss'
})
export class FiltroProductosComponent {

  filtroProductos: FormGroup;

constructor(
    private formBuilder: FormBuilder,
    private enviarFiltroProducto: EnviarFiltroProductosService
  )
{
  this.filtroProductos = this.formBuilder.group({
    filtro: ["todos", [Validators.required]]
  });
}

enviarFiltro() {
  this.enviarFiltroProducto.setFiltro(this.filtroProductos.value.filtro)
}


}
