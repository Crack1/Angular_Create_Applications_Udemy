import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  }
  nuevo: boolean = false
  id: string
  constructor(private _heroesService: HeroesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      this.id = params['id']
      if (this.id !== 'nuevo') {
        this._heroesService.getHeroe(this.id).subscribe(data => this.heroe = data)
      }
    })
  }

  ngOnInit() {
  }
  guardar() {
    if (this.id == 'nuevo') {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this._router.navigate(['/heroe', data.name])
        })
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
        }, error => { console.error(error) })
    }
  }

  agregarNuevo(forma: NgForm) {
    this._router.navigate(['/heroe', 'nuevo'])
    forma.reset({
      casa: 'Marvel'
    })
  }

}
