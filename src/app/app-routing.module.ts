import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {Error404Component} from "./error404/error404.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./register/register.component";
import {PaginaPrincipalComponent} from "./pagina-principal/pagina-principal.component";
import {AddNewTaskComponent} from "./add-new-task/add-new-task.component";
import {ListaTareasExamenComponent} from "./lista-tareas-examen/lista-tareas-examen.component";
import {DetallesTareaExamenComponent} from "./detalles-tarea-examen/detalles-tarea-examen.component";
import {TrabajandoConArraysComponent} from "./trabajando-con-arrays/trabajando-con-arrays.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutSinHeaderComponent,
    children: [
      {path: "", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]
  },

  {
    path: "",
    component: LayoutConHeaderComponent,
    children: [
        {path: "pagPrincipal", component: PaginaPrincipalComponent},
    ]
  },
  {
    path: "",
    component:LayoutSinHeaderComponent,
    children: [
        {path: "add", component: AddNewTaskComponent},
    ]
  },

  {
    path: "",
    component:LayoutSinHeaderComponent,
    children: [
      {path: "tasks", component: ListaTareasExamenComponent},
    ]
  },
  {
    path: "",
    component:LayoutSinHeaderComponent,
    children: [
      {path: "detallesTarea", component: DetallesTareaExamenComponent},
    ]
  },
  {
    path: "",
    component:LayoutSinHeaderComponent,
    children: [
      {path: "arrays", component: TrabajandoConArraysComponent},
    ]
  },
  {
    path: "**", component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
