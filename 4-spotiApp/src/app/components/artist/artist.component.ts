import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public _spotity: SpotifyService) { }

  artista: any = []
  pistas: any = []
  ngOnInit() {
    this.activatedRoute.params
      .pipe(map(params => params['id']))
      .subscribe(id => {
        this._spotity.getArtista(id)
          .subscribe(artista => {
            console.log(artista)
            this.artista = artista
          })
        this._spotity.getTop(id)
          .pipe(map((res: any) => res.tracks))
          .subscribe(pistas => {
            console.log(pistas)
            this.pistas = pistas
          })
      })
  }

}
