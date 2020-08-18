// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação das bibliotecas do AngularFire
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  // Declaração das variáveis

  // Interface da biblioteca do AngularFire que "devolve" na função a lista de dados 
  roomListRef: AngularFireList<any>;
  // Interface da biblioteca do AngularFire que "devolve" na função o dado pedido
  roomRef: AngularFireObject<any>;
  // Declaração da variável user
  user: any;


  constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$]+/g, ':');
  }

  // Função que cria os dados do dispositivo
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  createRoom(room: any, icone) {
    // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
    this.db.object(`/users/${this.user.email}/rooms/${room}`).set({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      name: room,
      icon: icone
    }); // .then(res => {
      // Escreve no console o valor do formulário
      // console.log(res)
      // })
      // Caso ocorra um erro, ele o escreve no console
      // .catch(error => console.log(error));
  }

  // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
  getRoom(room: any) {
    // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
    // /dispositivos/id (sendo o id passado junto a função)
    this.roomRef = this.db.object(`/users/${this.user.email}/rooms/${room}`);
    // Retorna o deviceRef para a função
    return this.roomRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getRoomList() {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.roomListRef = this.db.list(`/users/${this.user.email}/rooms`);
    // Retorna o deviceListRef para a função
    return this.roomListRef;
  }

  updateName(nome, comodo) {
    this.db.object(`/users/${this.user.email}/rooms/${comodo}/name`).set(nome);
  }

  updateIcon(icone, comodo) {
    return this.db.object(`/users/${this.user.email}/rooms/${comodo}/icon`).set(icone);
  }

  // Função que exclui os dados do objeto com o id passado
  deleteRoom(room: any) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.roomRef = this.db.object(`/users/${this.user.email}/rooms/${room}`);
    // Remove o objeto que foi atribuido ao deviceRef
    this.roomRef.remove();
  }
}
