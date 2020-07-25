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

    // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro
    getUserName(email) {
        email = email.replace(/[.#$]+/g, ':');
        // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
        // /dispositivos/id (sendo o id passado junto a função)
        this.name = this.db.object(`/users/${email}/settings/displayName`);

        return this.name;
    }

    // Função para mudar o nome do usuário, com a função é passado o parametro name, fornecido pela função
    updateUserName(name, email) {
        email = email.replace(/[.#$]+/g, ':');
        // Acessa o caminho /dispositivos + id + /status do firebese e "escuta" o valor do nó
        this.db.database.ref(`/users/${email}/settings/displayName`).set(name);
    }
}
