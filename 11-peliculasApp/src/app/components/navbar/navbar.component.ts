import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _ps: PeliculasService) { }
  buscar: string = ''
  ngOnInit() {
  }
  buscarPeliculas(pelicula: string) {
    this._ps.buscarPelicula(pelicula).subscribe(
      data => console.log(data.results)
    )
  }
}
