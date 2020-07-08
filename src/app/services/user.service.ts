// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação das bibliotecas do AngularFire
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    // Declaração das variáveis
    name: any;
    // Interface da biblioteca do AngularFire que "devolve" na função o dado pedido
    userRef: AngularFireObject<any>;

    constructor(
        // AngularFireDatabase é uma classe para refernciar o banco
        // Recebeu o apelido de db
        private db: AngularFireDatabase
    ) {

    }

    // Função que cria os dados do dispositivo
    // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
    createUser(email, name) {
        email = email.replace(/[.#$]+/g, ':');
        // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
        this.db.object(`/users/${email}/settings`).set({
            // Cada variavel recebe o dado que foi passado junto ao parâmetro
            name: name,
            email: email
        }); // .then(res => {
        // Escreve no console o valor do formulário
        // console.log(res)
        // })
        // Caso ocorra um erro, ele o escreve no console
        // .catch(error => console.log(error));
    }

    // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
    getUser(email) {
        email = email.replace(/[.#$]+/g, ':');
        // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
        // /dispositivos/id (sendo o id passado junto a função)
        this.userRef = this.db.object(`/users/${email}/settings/name`);
        // Retorna o deviceRef para a função
        console.log(this.userRef);
        return this.userRef;
    }

    // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
    getUserName(email) {
        email = email.replace(/[.#$]+/g, ':');
        // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
        // /dispositivos/id (sendo o id passado junto a função)
        this.name = this.db.object(`/users/${email}/settings/name`);

        return this.name;
    }

    // Função para mudar o nome do usuário, com a função é passado o parametro name, fornecido pela função
    updateUserName(name, email) {
        email = email.replace(/[.#$]+/g, ':');
        // Acessa o caminho /dispositivos + id + /status do firebese e "escuta" o valor do nó
        this.db.database.ref(`/users/${email}/settings/name`).set(name);
    }
}
