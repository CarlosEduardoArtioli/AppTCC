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
    this.user.email = this.user.email.replace(/[.#$@]+/g, '');
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getTimerList(mac) {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.timerListRef = this.db.list(`/users/${this.user.email}/devices/${mac}/timer`);
    // Retorna o deviceListRef para a função
    return this.timerListRef;
  }

  // Função que "Pega" os dados do timer passado
  getTimer(timer, mac) {
    // Atribui ao timerRef o valor do que foi encontrado no objeto com o seguinte caminho no banco
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    // Retorna o timerRef para a função
    return this.timerRef;
  }

  getTimerNumber(mac) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timernumber`);
    // Retorna o timerRef para a função
    return this.timerRef;
  }

  addTimerNumber(mac, timernumber: number) {
    this.db.object(`/users/${this.user.email}/devices/${mac}/timernumber`).set(timernumber);
  }

  // Função que atualiza os dados do timer
  addTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, mac, timernumber) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/timer${timernumber}`);
    // Retorna para a função a atualização dos dados
    return this.timerRef.set({
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

  // Função que atualiza os dados do timer
  updateTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, mac, timer) {
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

  // Função que exclui os dados do timer
  deleteTimer(mac: any, timer: any) {

    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);

    this.timerRef.remove();
  }
}
