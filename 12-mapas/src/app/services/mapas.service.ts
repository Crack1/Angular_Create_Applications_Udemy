import { Injectable } from '@angular/core';

import { Marcador } from '../interfaces/marcador.interface';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  marcadores: Marcador[] = []
  constructor() {
    let nuevoMarcador: Marcador = {
      lat: 51.678418,
      lng: 7.809007,
      titulo: 'Desde Servicio',
      draggable: true
    }
    this.marcadores.push(nuevoMarcador)
  }

  insertarMarcadores(marcador: Marcador) {
    this.marcadores.push(marcador)
    this.guardarMarcadores()
  }
  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }
  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'))
    } else {
      this.marcadores = []
    }
  }
}
