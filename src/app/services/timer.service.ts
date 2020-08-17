// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação das bibliotecas do AngularFire
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  // Declaração das variáveis

  // Interface da biblioteca do AngularFire que "devolve" na função a lista de dados
  timerListRef: AngularFireList<any>;
  // Interface da biblioteca do AngularFire que "devolve" na função o dado pedido
  timerRef: AngularFireObject<any>;
  // Declaração da variável user
  user: any;
  macs: any;


  constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$]+/g, ':');
    this.macs = this.timerRef = this.db.object(`/users/${this.user.email}/devices/`);
  }

  // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro
  getTimer(timer, mac) {
    // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
    // /dispositivos/id (sendo o id passado junto a função)
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    // Retorna o deviceRef para a função
    return this.timerRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getTimerList(mac: any) {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.timerListRef = this.db.list(`/users/${this.user.email}/devices/${mac}/timer`);
    // Retorna o deviceListRef para a função
    return this.timerListRef;
  }

  // Função que atualiza os dados do objeto
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  updateTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, timer, mac) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    // Retorna para a função a atualização dos dados
    return this.timerRef.update({
      action: action,
      timer: dateTime,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6,
      week7: week7
    });
  }

  // Função que exclui os dados do objeto com o id passado
  deleteTimer(mac: any, timer: any) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);

    return this.timerRef.set({
      action: '',
      timer: '',
      week1: '',
      week2: '',
      week3: '',
      week4: '',
      week5: '',
      week6: '',
      week7: ''
    });
  }
}
