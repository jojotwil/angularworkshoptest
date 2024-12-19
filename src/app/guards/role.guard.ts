import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthentificationService } from '../core/authentication.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthentificationService);
  const router = inject(Router);

  // Vérifier si l'utilisateur a le rôle 'ROLE_ADMIN'
  if (authService.getRole('ROLE_ADMIN')) {
    return true; // Autoriser l'accès à la route
  }

  // Déconnecter et rediriger l'utilisateur si le rôle ne correspond pas
  authService.logOut();
  router.navigate(['/signin']);
  return false; // Bloquer l'accès
};