import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { Error404Component } from './error404/error404.component';
import { RegisterComponent } from './register/register.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { BotonExamenComponent } from './boton-examen/boton-examen.component';
import { ListaTareasExamenComponent } from './lista-tareas-examen/lista-tareas-examen.component';
import { DetallesTareaExamenComponent } from './detalles-tarea-examen/detalles-tarea-examen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrabajandoConArraysComponent } from './trabajando-con-arrays/trabajando-con-arrays.component';
import { ProdcutoComponent } from './prodcuto/prodcuto.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutConHeaderComponent,
    LayoutSinHeaderComponent,
    Error404Component,
    RegisterComponent,
    PaginaPrincipalComponent,
    BotonExamenComponent,
    ListaTareasExamenComponent,
    DetallesTareaExamenComponent,
    TrabajandoConArraysComponent,
    ProdcutoComponent,
    DetallesProductoComponent,
    FiltroProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AddNewTaskComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
