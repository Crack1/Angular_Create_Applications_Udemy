import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  pelicula: string = ''
  results: any[] = []
  paramExist: boolean = false
  constructor(private _ps: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params) => {
      if (params['pelicula']) {
        this.pelicula = params['pelicula']
        this._ps.buscarPelicula(this.pelicula).subscribe(
          (data) => {
            this.results = data.results
            console.log(this.results)
          }
        )
      } else {
        this._ps.getPopulares().subscribe(
          (data) => {
            this.results = data.results
            console.log(this.results)
          }
        )
      }
    })


  }

  verPelicula(pelicula: string) {
    this.router.navigate(['./pelicula', pelicula])
  }

  /*   buscarPeliculas() {
      this.activatedRoute.params.subscribe((params) => {
        this.pelicula = params['pelicula']
      })
      this._ps.buscarPelicula(this.pelicula).subscribe(
        (data) => {
          this.results = data.results
          console.log(this.results)
        }
      )
  
    } */

  ngOnInit() {

  }

}
