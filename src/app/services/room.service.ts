// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Cômodo

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
  email: any;


  constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.email = this.user.email;
    this.email = this.email.replace(/[.#$]+/g, ':');
  }

  // Função que cria os dados do cômodo
  createRoom(room: any, icone) {
    this.db.object(`/users/${this.email}/rooms/${room}`).set({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      name: room,
      icon: icone
    });
  }

  // Função que "Pega" os dados do objeto com o cômodo que foi passado no parâmetro
  getRoom(room: any) {
    // Atribui ao roomRef o objeto do que foi encontrado no caminho passado
    this.roomRef = this.db.object(`/users/${this.email}/rooms/${room}`);
    // Retorna o roomRef para a função
    return this.roomRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getRoomList() {
    // Atribui ao roomListRef a lista dos objetos encontrados no caminho
    this.roomListRef = this.db.list(`/users/${this.email}/rooms`);
    // Retorna o roomListRef para a função
    return this.roomListRef;
  }

  // Função para atualizar o nome do cômodo
  updateName(nome, comodo) {
    this.db.object(`/users/${this.email}/rooms/${comodo}/name`).set(nome);
  }

  // Função para atualizar o icone do cômodo
  updateIcon(icone, comodo) {
    return this.db.object(`/users/${this.email}/rooms/${comodo}/icon`).set(icone);
  }

  // Função que exclui os dados do objeto com o cômodo passado
  deleteRoom(room: any) {
    // Atribui ao roomRef o objeto que foi encontrado no caminho
    this.roomRef = this.db.object(`/users/${this.email}/rooms/${room}`);
    // Remove o objeto que foi atribuido ao roomRef
    this.roomRef.remove();
  }
}
