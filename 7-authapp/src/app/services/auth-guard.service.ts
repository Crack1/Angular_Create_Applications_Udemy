import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth0: AuthService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth0.isAuthenticated()) {
      console.log(`Paso el Guard`)
      return true
    } else {
      console.log(`Bloqueado por el Guard`)
      return false
    }
  }
}
