import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component';
import { ShareComponent } from './components/share/share.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ShareComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
