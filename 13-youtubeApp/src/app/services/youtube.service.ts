import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL: string = 'https://www.googleapis.com/youtube/v3'
  private apiKey: string = 'AIzaSyAtsajdjZpjcO3ARD6B5xMJxg79a3KpAfI'
  private playlist: string = 'PLx2XttLIfR_gMOKZu7ekC2JR9F9N2_GMp'
  private nextPageToken: string = ''
  constructor(public http: Http) { }
  getVideos() {
    let url = `${this.youtubeURL}/playlistItems`
    let params = new URLSearchParams()
    params.set('part', 'snippet')
    params.set('maxResults', '10')
    params.set('playlistId', this.playlist)
    params.set('key', this.apiKey)

    if (this.nextPageToken) {
      params.set('pageToke', this.nextPageToken)
    }

    return this.http.get(url, { search: params }).pipe(map((res) => {
      this.nextPageToken = res.json().nextPageToken
      let videos: any[] = []
      for (let video of res.json().items) {
        videos.push(video.snippet)
      }
      return videos
    }))
  }
}
