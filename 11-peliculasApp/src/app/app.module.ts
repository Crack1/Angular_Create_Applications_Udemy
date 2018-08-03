import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTING } from './app.routes';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule, JsonpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
