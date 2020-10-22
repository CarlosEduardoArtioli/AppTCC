// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação das bibliotecas do AngularFire
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    // Declaração das variáveis
    name: any;

    constructor(
        // AngularFireDatabase é uma classe para refernciar o banco
        // Recebeu o apelido de db
        private db: AngularFireDatabase
    ) {

    }

    // Função que pega o nome do usuário
    getUserName(email) {
        email = email.replace(/[.#$@]+/g, '');
        this.name = this.db.object(`/users/${email}/settings/displayName`);
        return this.name;
    }

    // Função para mudar o nome do usuário, com a função é passado o parametro name, fornecido pela função
    updateUserName(name, email) {
        email = email.replace(/[.#$@]+/g, '');
        this.db.database.ref(`/users/${email}/settings/displayName`).set(name);
    }
}
