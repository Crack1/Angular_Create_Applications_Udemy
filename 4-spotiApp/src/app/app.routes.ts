import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component';
import { ShareComponent } from './components/share/share.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component'



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'share', component: ShareComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true })
