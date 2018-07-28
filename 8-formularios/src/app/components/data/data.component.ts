import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  usuario: Object = {
    nombrecompleto: {
      nombre: 'fernando',
      apellido: 'herrera'
    },
    correo: 'erwin@test.com',
    pasatiempos: ['correr', 'dormir', 'comer'],
    password1: '',
    password2: ''
  }
  forma: FormGroup
  constructor() {
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        nombre: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
        apellido: new FormControl('', [Validators.required, this.noHerrera]),
      }),

      correo: new FormControl('',
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIguales.bind(this.forma)
    ])
    /*     this.forma.setValue(this.usuario)
        this.forma.reset(this.usuario) */

    this.forma.controls['username'].valueChanges.subscribe((data) => {
      console.log(data)
    })
    this.forma.controls['username'].statusChanges.subscribe((data) => {
      console.log(data)
    })
  }
  guardarCambios() {
    console.log(this.forma.value)
  }
  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }
  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'herrera') {
      return {
        noherrera: true
      }
    }
    return null
  }
  noIguales(control: FormControl): { [s: string]: boolean } {
    console.log(this)
    let forma1: any = this
    if (control.value !== forma1.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'strider') {
          console.log(`Existe usuario`)
          resolve({ exist: true })
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return promesa
  }

  ngOnInit() {
  }

}
