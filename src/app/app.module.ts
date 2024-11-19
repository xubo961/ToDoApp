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
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
