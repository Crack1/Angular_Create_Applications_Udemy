import { Component, OnInit } from '@angular/core';

//services
import { YoutubeService } from '../../services/youtube.service';

declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  videos: any[] = []
  videoSeleccionado: any
  constructor(public _yts: YoutubeService) {
    this._yts.getVideos().subscribe((videos) => {
      this.videos = videos
    })
  }

  verVideo(video) {
    this.videoSeleccionado = video
    $('#myModal').modal()
  }
  cerrarModal() {
    this.videoSeleccionado = null
    $('#myModal').modal('hide')
  }
  cargarMas() {
    this._yts.getVideos().subscribe((videos) => {
      this.videos.push.apply(this.videos, videos) // to push all elements from a second array
    })
  }

}
