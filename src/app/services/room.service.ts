// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação do Model do dispositivo
import { Room } from '../models/room.model';
// Importação das bibliotecas do AngularFire
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class roomService {
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
    this.user = JSON.parse(localStorage.getItem('app.user'));
    this.user.email = this.user.email.replace(/[.#$]+/g, '');
  }

  // Função que cria os dados do dispositivo
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  createRoom(apt: Room, room: any) {
    // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
    this.db.object(`/users/${this.user.email}/rooms/${room}`).set({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      name: apt.name,
      color: apt.color
    })//.then(res => {
      // Escreve no console o valor do formulário
      //console.log(res)
    //})
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

  // Função que atualiza os dados do objeto
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  updateDevice(apt: Room) {
    // Retorna para a função a atualização dos dados
    return this.roomRef.update({
      name: apt.name,
      color: apt.color
    })
  }

  // Função que exclui os dados do objeto com o id passado
  deleteDevice(room: any) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.roomRef = this.db.object(`/users/${this.user.email}/rooms/${room}`);
    // Remove o objeto que foi atribuido ao deviceRef
    this.roomRef.remove();
  }
}