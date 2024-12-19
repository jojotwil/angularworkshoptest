import { Component } from '@angular/core';
import { AuthentificationService } from '../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthentificationService) {}

  // Méthode pour envoyer la requête de connexion et stocker le token JWT
  login(d: any): void {
    this.authService.singin(d).subscribe(
      (response) => {
        // Stockez le jeton JWT dans le stockage local
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);
        alert('Connexion réussie');
      },
      (error) => {
        alert('Erreur de connexion');
      }
    );
  }
}