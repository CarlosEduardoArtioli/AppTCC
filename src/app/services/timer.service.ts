// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Timer

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


  constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$]+/g, ':');
  }

  // Função que "Pega" os dados do timer passado
  getTimer(timer, mac) {
    // Atribui ao timerRef o valor do que foi encontrado no objeto com o seguinte caminho no banco
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    // Retorna o timerRef para a função
    return this.timerRef;
  }

  // Função que atualiza os dados do timer
  updateTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, timer, mac) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    // Retorna para a função a atualização dos dados
    return this.timerRef.update({
      action: action,
      timer: dateTime,
      show: true,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6,
      week7: week7
    });
  }

  // Função que exclui os dados do timer
  deleteTimer(mac: any, timer: any) {

    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);

    return this.timerRef.set({
      action: '',
      show: false,
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

  // Função que adiciona um novo timer
  addTimer(mac, timer) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);

    return this.timerRef.set({
      action: '',
      show: true,
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
