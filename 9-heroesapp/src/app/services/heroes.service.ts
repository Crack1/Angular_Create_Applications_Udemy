import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = "https://heroes-7869b.firebaseio.com/heroes.json"
  heroeURL: string = "https://heroes-7869b.firebaseio.com/heroes"
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  })
  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe)
    return this.http.post(this.heroesURL, body, { headers: this.headers }).pipe(map((res) => {
      return res.json()
    }))
  }
  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe)
    let url = `${this.heroeURL}/${key$}.json`
    return this.http.put(url, body, { headers: this.headers }).pipe(map((res) => {
      return res.json()
    }))
  }
  getHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`
    return this.http.get(url, { headers: this.headers }).pipe(map((res) => {
      return res.json()
    }))
  }

  getHeroes() {
    return this.http.get(this.heroesURL, { headers: this.headers }).pipe(map((res) => {
      return res.json()
    }))
  }
  borrarHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`
    return this.http.delete(url, { headers: this.headers }).pipe(map((res) => {
      return res.json()
    }))
  }
}
