import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient) {}

  // Méthode pour envoyer la requête de connexion
  singin(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signin', data);
  }

  // Vérifie si l'utilisateur est connecté
  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  // Récupère le rôle de l'utilisateur
  getRole(role: string): boolean {
    const roleAs = localStorage.getItem('role');
    return roleAs === role;
  }

  // Déconnexion de l'utilisateur
  logOut(): void {
    localStorage.clear();
  }
}