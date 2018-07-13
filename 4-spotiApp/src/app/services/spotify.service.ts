import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private urlSpotify: string = 'https://api.spotify.com/v1/'
  private authorization: string = 'BQCPGvUJK0BobHpLngANtzCibxptyoTPtejyouz_mlGOAyVC79K8EJXUSUIt2iiRaqNi9-QM0VblBzRAd1I'
  artistas: any[] = []
  artist: any[] = []

  constructor(public http: HttpClient) {
    console.log(`Servicio de spotify listo!!!!`)
  }
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.authorization}`
    })
    return headers
  }
  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`
    let headers = this.getHeaders()
    return this.http.get(url, { headers }).pipe(map((res: any) => {
      this.artistas = res.artists.items
      return this.artistas
    }))
  }
  getArtista(artistID: string) {
    let url = `${this.urlSpotify}artists/${artistID}`
    let headers = this.getHeaders()
    return this.http.get(url, { headers })/*.pipe(map((res: any) => {
      this.artist = res.artists.items
      return this.artist
    }))*/
  }
  getTop(artistID: string) {
    let url = `${this.urlSpotify}artists/${artistID}/top-tracks?country=ES`
    let headers = this.getHeaders()
    return this.http.get(url, { headers })
  }
}

