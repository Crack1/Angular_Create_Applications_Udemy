import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';
import { ClassGetter } from '../../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styles: []
})
export class Home2Component implements OnInit {

  cartelera: any
  populares: any
  popularesNinos: any
  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(
      data => {
        this.cartelera = data.results
      }
    )
    this._ps.getPopulares().subscribe(
      data => {
        this.populares = data.results
      }
    )
    this._ps.getPopularesNinos().subscribe(
      data => {
        this.popularesNinos = data.results
      }
    )
  }

  ngOnInit() {
  }

}
