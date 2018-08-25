import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';
import { Lista } from '../../../5-ionic-deseos/src/app/clases/listas';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16
  marcadores = []
  constructor(public _ms: MapasService) {
    _ms.cargarMarcadores()
  }

  clickMapa(evento) {
    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Nuevo',
      draggable: true
    }
    this._ms.insertarMarcadores(nuevoMarcador)
  }
  clickMarcador(marcador: Marcador, index) {
    console.log(marcador, index)
  }
  dragEndMarcador(marcador: Marcador, evento) {
    let lat = evento.coords.lat
    let lng = evento.coords.lng

    marcador.lat = lat
    marcador.lng = lng
    this._ms.guardarMarcadores()
  }
}
