import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EnviarDatosService} from "../services/datos/enviar-datos.service";
import {Datos} from "../services/interfaces/datos";
import {InformacionDatosService} from "../services/datos/informacion-datos.service";

@Component({
  selector: 'app-detalles-tarea-examen',
  templateUrl: './detalles-tarea-examen.component.html',
  styleUrl: './detalles-tarea-examen.component.scss'
})
export class DetallesTareaExamenComponent implements OnInit {

  datos: Datos | null = {
    id: -1,
    nombre: "",
    descripcion: "",
    estado: ""
  }

  constructor(
      private enviarDatosService: EnviarDatosService,
      private informacionDatosService: InformacionDatosService
  ) {}

  golistTask() {
    this.enviarDatosService.actualizarDatos(null);
    this.informacionDatosService.toggleModal(false);
  }

  ngOnInit() {
    this.enviarDatosService.info$.subscribe(datos => {
      this.datos = datos
    });
  }

}
