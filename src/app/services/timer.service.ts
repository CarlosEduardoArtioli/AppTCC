// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo

import { Injectable } from '@angular/core';
// Importação do Model do dispositivo
import { Dispositivos } from '../models/device.model';
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
    this.user = JSON.parse(localStorage.getItem('app.user'));
    this.user.email = this.user.email.replace(/[.#$]+/g, ':');
  }

  // Função que cria os dados do dispositivo
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  createTimer(timer: any, week1: any, week2: any, week3: any, week4: any, week5: any, week6: any, week7: any, mac: any) {
    // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
    this.db.object(`/users/${this.user.email}/devices/${mac}/timer1`).update({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      timer: timer,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6,
      week7: week7
    }); // .then(res => {
      // Escreve no console o valor do formulário
      // console.log(res)
      // })
      // Caso ocorra um erro, ele o escreve no console
     // .catch(error => console.log(error));
  }

  // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
  getTimer(timer: any, week: any, mac: any) {
    // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
    // /dispositivos/id (sendo o id passado junto a função)
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/${timer}`);
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/${week}`);
    // Retorna o deviceRef para a função
    return this.timerRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getTimerList() {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.timerListRef = this.db.list(`/users/${this.user.email}/devices/`);
    // Retorna o deviceListRef para a função
    return this.timerListRef;
  }

  // Função que atualiza os dados do objeto
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  updateTimer(apt: Dispositivos) {
    // Retorna para a função a atualização dos dados
    return this.timerRef.update({
      timer: apt.timer,
      week: apt.week1
    });
  }

  // Função que exclui os dados do objeto com o id passado
  deleteDevice(timer: any) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.timerRef = this.db.object(`/users/${this.user.email}/timers/${timer}`);
    // Remove o objeto que foi atribuido ao deviceRef
    this.timerRef.remove();
  }
}
