import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey: string = "60152651641b8b7c5e915e9c49167ab1"
  private urlMovieDB: string = "https://api.themoviedb.org/3"
  constructor(private jsonp: Jsonp) {
  }

  getPopulares() {
    let url = `${this.urlMovieDB}/discover/movie?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((data) => data.json()))
  }

  getPopularesNinos() {
    let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((data) => data.json()))
  }

  getCartelera() {
    let desde = new Date()
    let hasta = new Date()
    hasta.setDate(hasta.getDate() + 7)
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay() + 1}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay() + 1}`
    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${hastaStr}&primary_release_date.lte=${desdeStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((data) => data.json()))
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDB}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((data) => data.json()))
  }
  verPelicula(pelicula) {
    let url = `${this.urlMovieDB}/movie/${pelicula}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url)
    return this.jsonp.get(url).pipe(map((data) => data.json()))
  }

}
