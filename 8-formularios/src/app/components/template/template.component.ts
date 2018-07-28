import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: 'CRI',
    sexo: '',
    acepta: false
  }
  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  }, {
    codigo: 'ESP',
    nombre: 'España'
  }]
  sexo = [{
    tipo: 'Hombre',
    ab: 'masc'
  },
  {
    tipo: 'Mujer',
    ab: 'feme'
  }]
  constructor() { }

  ngOnInit() {
  }
  guardar(forma: NgForm) {
    console.log(forma)
    console.log(forma.value)
    console.log(this.usuario)
  }
}
