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

export class AppointmentService {
  // Declaração das variáveis

  // Interface da biblioteca do AngularFire que "devolve" na função a lista de dados 
  deviceListRef: AngularFireList<any>;
  // Interface da biblioteca do AngularFire que "devolve" na função o dado pedido
  deviceRef: AngularFireObject<any>;
  // Declaração da variável status
  status = "";

  constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    private db: AngularFireDatabase
    ) { }

  // Função que cria os dados do dispositivo
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  createDevice(apt: Dispositivos) {
    // Retorna para a função um deviceListRef com um id aleatório(push) com os seguintes dados
    return this.deviceListRef.push({
      // Cada variavel recebe o dado que foi passado junto ao parâmetro
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Função que "Pega" os dados do objeto com o id que foi passado no parâmetro 
  getDevice(id: string) {
    // Atribui ao deviceRef o valor do que foi encontrado no objeto com o seguinte caminho no banco:
    // /dispositivos/id (sendo o id passado junto a função)
    this.deviceRef = this.db.object('/dispositivos/' + id);
    // Retorna o deviceRef para a função
    return this.deviceRef;
  }

  // Função que "Pega" a lista de todos objetos com seus respectivos valores
  getDeviceList() {
    // Atribui ao deviceListRef a lista dos objetos encontrados no caminho
    this.deviceListRef = this.db.list('/dispositivos');
    // Retorna o deviceListRef para a função
    return this.deviceListRef;
  }

  // Função que atualiza os dados do objeto
  // Recebe um parâmetro que é "convertido" para a inserção de dados no device.model
  updateDevice(id, apt: Dispositivos) {
    // Retorna para a função a atualização dos dados
    return this.deviceRef.update({
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Função que exclui os dados do objeto com o id passado
  deleteDevice(id: string) {
    // Atribui ao deviceRef o objeto que foi encontrado no seguinte caminho:
    // /dispositivos/id (sendo o id passado junto a função)
    this.deviceRef = this.db.object('/dispositivos/' + id);
    // Remove o objeto que foi atribuido ao deviceRef
    this.deviceRef.remove();
  }

  // Função para mudar o status do dispositivo, com a função é passado o parametro id, fornecido pela função
  mudaStatus(id){
    // Acessa o caminho /dispositivos + id + /status do firebese e "escuta" o valor do nó
    this.db.database.ref('/dispositivos/' + id + '/status').once('value').then(snapshot =>{
      // Verifica se o valor do nó é igual a 'on'
      if ((snapshot.val()) == 'on'){
        // Se for, ele entra no caminho e altera o valor e muda o valor para 'off'
        this.db.database.ref('/dispositivos/' + id + '/status').set('off');
      }
      else{
        // Se não for, ele entra no caminho e altera o valor e muda o valor para 'on'
        this.db.database.ref('/dispositivos/' + id + '/status').set('on');
      }
    })
  }
}