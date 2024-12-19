import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../core/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService._is_logged()) {
      return true;  // Autoriser l'accès si l'utilisateur est connecté
    }
    this.router.navigate(['/signin']);  // Rediriger vers la page de connexion
    return false;  // Bloquer l'accès
  }
}