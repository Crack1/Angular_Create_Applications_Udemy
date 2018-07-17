import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista.service'
import { NavController } from 'ionic-angular'
import { AgregarComponent } from '../agregar/agregar.component'
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases/listas';



@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService, private navCtrl: NavController) { }

  ngOnInit(): void {
    console.log(this._listaDeseos.listas)
  }

  irAgregar() {
    this.navCtrl.push(AgregarComponent)
  }
  verDetalle(lista, idx) {
    this.navCtrl.push(DetalleComponent, { lista, idx })
  }
}
