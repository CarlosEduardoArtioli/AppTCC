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

export class DeviceService {
  // Declaração das variáveis

  // Interface da biblioteca do AngularFire que "devolve" na função a lista de dados 
  deviceListRef: AngularFireList<any>;
  // Interface da biblioteca do AngularFire que "devolve" na função o dado pedido
  deviceRef: AngularFireObject<any>;
  // Declaração da variável status
  status = '';
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
  createDevice(apt: Dispositivos, mac: any) {
    // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
    this.db.object(`/users/${this.user.email}/devices/${mac}`).set({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      room: apt.room,
      icon: apt.icon,
      timer: '',
      week1: '',
      week2: '',
      week3: '',
      week4: '',
      week5: '',
      week6: '',
      week7: '',
      wt: ''
    }); // .then(res => {
      // Escreve no console o valor do formulário
      // console.log(res)
    // })
      // Caso ocorra um erro, ele o escreve no console
     // .catch(error => console.log(error));
  }

  // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
  getDevice(mac: any) {
    // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
    // /dispositivos/id (sendo o id passado junto a função)
    this.deviceRef = this.db.object(`/users/${this.user.email}/devices/${mac}`);
    // Retorna o deviceRef para a função
    return this.deviceRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getDeviceList() {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.deviceListRef = this.db.list(`/users/${this.user.email}/devices`);
    // Retorna o deviceListRef para a função
    return this.deviceListRef;
  }

  // Função que atualiza os dados do objeto
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  updateDevice(nome, icone, comodo) {
    // Retorna para a função a atualização dos dados
    return this.deviceRef.update({
      name: nome,
      room: comodo,
      icon: icone,
    });
  }

  updateIcon(icone, mac) {
    return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/icon`).set(icone);
  }

  updateName(nome, mac) {
    return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/name`).set(nome);
  }

  updateRoom(room, iconRoom, mac) {
     this.db.database.ref(`/users/${this.user.email}/devices/${mac}/room`).set(room);
     return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/iconRoom`).set(iconRoom);
  }

  // Função que exclui os dados do objeto com o id passado
  deleteDevice(mac: any) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.deviceRef = this.db.object(`/users/${this.user.email}/devices/${mac}`);
    // Remove o objeto que foi atribuido ao deviceRef
    this.deviceRef.remove();
  }

  // Função para mudar o status do dispositivo, com a função é passado o parametro id, fornecido pela função
  mudaStatus(mac: any) {
    // Acessa o caminho /dispositivos + id + /status do firebese e "escuta" o valor do nó
    this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).once('value').then(snapshot => {
      // Verifica se o valor do nó é igual a 'on'
      if ((snapshot.val()) === 'ligado') {
        // Se for, ele entra no caminho e altera o valor e muda o valor para 'off'
        this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).set('desligado');
      } else {
        // Se não for, ele entra no caminho e altera o valor e muda o valor para 'on'
        this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).set('ligado');
      }
    });
  }
}
