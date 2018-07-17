import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista.service';
import { AboutComponent } from '../../../../2-spa/src/app/components/about/about.component';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number
  lista: any
  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams,
    public _alertCtrl: AlertController,
    public _listaDeseosService: ListaDeseosService
  ) {
    console.log(this._navParams.get('lista'))
    this.idx = this._navParams.get('idx')
    this.lista = this._navParams.get('lista')
  }
  ngOnInit(): void { }
  actualizar(item: ListaItem) {
    item.completado = !item.completado
    let todosMarcados = true
    for (let item of this.lista.items) {
      if (!item.completado) {
        todosMarcados = false
        break
      }
    }
    this.lista.terminada = todosMarcados
    this._listaDeseosService.actualizarData()
  }
  borrarItem() {
    const confirm = this._alertCtrl.create({
      title: this.lista.nombre,
      message: 'Esta seguro que desea eliminar la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.idx)
            this._navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();
  }
}
