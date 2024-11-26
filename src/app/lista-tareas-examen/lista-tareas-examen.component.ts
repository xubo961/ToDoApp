import {Component, OnInit} from '@angular/core';
import {Datos} from "../services/interfaces/datos";
import {Router} from "@angular/router";
import {EnviarDatosService} from "../services/datos/enviar-datos.service";
import {InformacionDatosService} from "../services/datos/informacion-datos.service";
import {DetallesTareaExamenComponent} from "../detalles-tarea-examen/detalles-tarea-examen.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-lista-tareas-examen',
  templateUrl: './lista-tareas-examen.component.html',
  styleUrl: './lista-tareas-examen.component.scss'
})
export class ListaTareasExamenComponent implements OnInit {

  mostrarDetallesTarea: boolean = true;

  constructor(
      private router: Router,
      private enviarDatosService: EnviarDatosService,
      private informacionDatosService: InformacionDatosService,
      private formBuilder: FormBuilder
  ) {}

  datos: Datos[] = [
    {
      id: 1,
      nombre: "Pepe",
      descripcion: "Terminar y entregar los deberes",
      estado: "Terminado"
    },
    {
      id: 2,
      nombre: "Sandra",
      descripcion: "Conseguir un nuevo empleo",
      estado: "Pendiente"
    },
    {
      id: 3,
      nombre: "Carlos",
      descripcion: "Visitar más a la familia",
      estado: "Pendiente"
    },
    {
      id: 4,
      nombre: "Fernando",
      descripcion: "Comprar un regalo para el cumpleaños de mamá",
      estado: "Terminado"
    },
    {
      id: 5,
      nombre: "Nuria",
      descripcion: "Termianr de leer el libro",
      estado: "Pendiente"
    }]

  mostrarDetalles(dtos: Datos) {
    this.enviarDatosService.actualizarDatos(dtos);
    this.informacionDatosService.toggleModal(true);
  }

  goPaginaPrincipal() {
    this.router.navigate(['pagPrincipal']);
  }

  ngOnInit() {
      this.informacionDatosService.modal$.subscribe(modal => {
        this.mostrarDetallesTarea= modal;
      });
  }


}
