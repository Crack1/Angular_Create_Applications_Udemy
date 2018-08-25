import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { Pelicula2Component } from './components/pelicula2/pelicula2.component';
import { Buscar2Component } from './components/buscar2/buscar2.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'buscar2', component: Buscar2Component },
  { path: 'home/:pelicula', component: Home2Component },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'pelicula2/:id', component: Pelicula2Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
