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
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Home2Component } from './components/home2/home2.component';
import { Buscar2Component } from './components/buscar2/buscar2.component';
import { Pelicula2Component } from './components/pelicula2/pelicula2.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home2/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    CategoriasComponent,
    Navbar2Component,
    Home2Component,
    Buscar2Component,
    Pelicula2Component,
    PeliculaImagenPipe,
    GaleriaComponent
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
