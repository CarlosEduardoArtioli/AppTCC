import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

// Os Route Guards são interfaces que podem dizer ao router se ele deve ou não permitir a navegação para uma rota solicitada
// Caso o usuário não esteja autenticado/logado, o app redireciona o usuário para a página "login"
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (!user) { this.router.navigate(['login']); }

        resolve(user ? true : false);
      });
    });
  }
}
