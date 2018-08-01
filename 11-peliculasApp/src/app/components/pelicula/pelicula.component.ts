import { Component, OnInit, Directive } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router'
import { CategoriasComponent } from '../categorias/categorias.component';

import { parse } from 'querystring';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  peliculaID: string
  pelicula: any = {}
  constructor(private _ps: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.peliculaID = params['id']
    })

    this._ps.verPelicula(this.peliculaID).subscribe((data) => {
      this.pelicula = data

      this.pelicula.genres.forEach(element => {
        if (element.id == 28) {
          element.style = 'badge-primary'
        }
        else if (element.id == 878) {
          element.style = 'badge-secondary'
        }
        else if (element.id == 12) {
          element.style = 'badge-warning'
        }
        else if (element.id == 14) {
          element.style = 'badge-info'
        }
        else if (element.id == 35) {
          element.style = 'badge-light'
        }
        else {
          element.style = 'badge-dark'
        }
      });
      console.log(this.pelicula)
    })
  }

  ngOnInit() {
  }

}

