import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  results: any[] = []
  constructor(private _ps: PeliculasService, private router: Router) {
    this._ps.getPopulares().subscribe(
      (data) => {
        this.results = data.results
        console.log(this.results)
      }
    )
  }

  verPelicula(pelicula: string) {
    this.router.navigate(['./pelicula', pelicula])

  }
  ngOnInit() {

  }

}
