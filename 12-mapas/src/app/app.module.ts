import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

//Servicios
import { MapasService } from './services/mapas.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxN0sU9fM_yxcDD9nAkWMa-XBlKddbKqE'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
