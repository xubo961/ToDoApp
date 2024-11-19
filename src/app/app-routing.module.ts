import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {Error404Component} from "./error404/error404.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./register/register.component";
import {PaginaPrincipalComponent} from "./pagina-principal/pagina-principal.component";

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
    path: "**", component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
