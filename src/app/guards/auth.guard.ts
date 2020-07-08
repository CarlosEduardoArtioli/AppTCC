// O auth.guard.ts serve para verificar se o usuário está autenticado
// e não o deixa passar da tela de login/register
// Para mais informações assistir o curso "Frontend Developer"
// Curso Angular 8, Ionic 4 e Firebase

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// Importação da classe NavController
import { NavController } from '@ionic/angular';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        // NavController é uma classe para o controle da navegação dentro do App
        // Recebeu o apelido de navCtrl
        private navCtrl: NavController,
    ) {

    }

    // Função de verificação do usuário (A função retorna um booleano(true ou false))
    canActivate() {
        // Busca no local storage o usuário logado
        const user = localStorage.getItem('app.user');
        // Se não houver usuário logado
        if (!user) {
            // Redireciona para a pagina 'login'
            this.navCtrl.navigateRoot('login');
            // Retorna para a função o valor 'false'
            return false;
        }
        // Se houver usuário logado retorna para a função o valor 'true'
        return true;
    }
}
