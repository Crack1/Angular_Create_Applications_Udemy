import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {

  @Input() listCategorias: any

  constructor() {

  }

  ngOnInit() {
    let test = this.listCategorias

    console.log(test)
  }

}
