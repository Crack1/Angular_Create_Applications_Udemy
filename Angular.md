npm i -g @angular/cli
ng new project
ng serve
ng generate component cursos

<base href="/"> /*tiene que estar de manera obligatoria en el index.html si no el router no va a funcionar*/
Routing como es un modulo se debe de cargar en los imports
los servicios se cargan en los providers (porque se desea reutilzarlo en otros componentes etc...)


<router-outlet></router-outlet> // se encarga de cargar el componente definido en la ruta ES OBLIGATORIO  
agregar + antes convierte a entero +params.edad

Un Observable siempre tiene un metodo subscribe()

ng serve -o
ng g c pages/about -is --spec=false /*inline style doesnot generate the spect file*/
ng g c pages/mainpage -is --spec=false --flat /*inline style doesn't generate the spect file and dont generate a folder*/
ng g s services/usuario --spect=false /*Generate services*/
ng g g guards/auth --spect=false /*Generate Guards*/


ng g c login --spect=false -is
ng g c nopagefound --spect=false -is
ng g c pages/dashboard --spect=false -is
ng g c pages/progress --spect=false -is
ng g c pages/graficas1 --spect=false -is
ng g c shared/header --spect=false -is
ng g c shared/sidebar --spect=false -is
ng g c shared/breadcrumbs --spect=false -is
ng g s services/shared --spect=false
ng g s services/sidebar --spect=false
ng g c pages/pages --flat -is --spec=false
ng g d directives/resaltado

/*Sometimes we need to restart the server*/

/*Todos los modulos se agregan en el import*/

el tizoncito

/*En los decoradores pasan por obligacion el contructor de la clase*/

npm install bootstrap

import { ActivatedRoute } from '@angular/router' /*Sirve para ver los parametros de una URL*/

The <base href="/"> tells the Angular router what is the static part of the URL. The router then only modifies the remaining part of the URL.

import { HttpClient } from '@angular/common/http' /*Permite tener acceso a los servicios POST, GET,ETC...*/
Si usamos el HttpClient en el modulo pricipal app.module ocupas importar el modulo HttpClientModule
import { HttpClientModule } from '@angular/common/http'

private activatedRoute: ActivatedRoute /*sirve para leer parametros de la URL*/


npm install --save auth0-js
<script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>
<script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js"></script>

ng serve --port 3000 /*CHANGE PORT*/

[ngModel]='usuario.nombre' /*solo recibe informacion*/
[(ngModel)]='usuario.nombre'  /*Recibe y envia informacion*/

#forma="ngForm" /*#forma es una variable local que hace referencia a un elemento*/

  <input type="text" class="form-control" placeholder="Nombre" name="nombre" [(ngModel)]='usuario.nombre' required minlength="5" #nombre="ngModel">
        <div *ngIf="nombre.errors?.required">
          Este campo es requerido
        </div>
        <div *ngIf="nombre.errors?.minlength ">
          Este campo es requiere por lo menos {{nombre.errors.minlength.requiredLength}} caracteres
        </div>


  pure: false /*se usa en los Pipes para que este pendiente de los ciclos de cambios que haga angular*/



/*USE NODE_MODULES*/
"styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.slim.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]



/*uso de firebase en el chat*/
https://github.com/angular/angularfire2
https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md

antojitos lupita
comedor lupita
taqueria la pequena marquesa
cantina el tenanpa garibaldi
pulques curados las duelistas
Tacos RON LAURO de MÉDULA
EL INCREÍBLE SABOR CASERO EN FONDA MARGARITA desayunar colonia del valle
solution worked for me, but slightly simplified. I only deleted the ...Roaming\npm and ...\Roaming\npm-cache directories then re-ran my npm i and it seems to have fixed the issue for me.
