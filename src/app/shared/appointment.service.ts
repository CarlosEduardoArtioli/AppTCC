import { Injectable } from '@angular/core';
import { Dispositivos } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  deviceListRef: AngularFireList<any>;
  deviceRef: AngularFireObject<any>;
  status = "";

  constructor(private db: AngularFireDatabase) { }

  // Create
  createDevice(apt: Dispositivos) {
    return this.deviceListRef.push({
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Get Single
  getDevice(id: string) {
    this.deviceRef = this.db.object('/dispositivos/' + id);
    return this.deviceRef;
  }

  // Get List
  getDeviceList() {
    this.deviceListRef = this.db.list('/dispositivos');
    return this.deviceListRef;
  }

  // Update
  updateDevice(id, apt: Dispositivos) {
    return this.deviceRef.update({
      name: apt.name,
      status: apt.status,
      mac: apt.mac,
      icon: apt.icon
    })
  }

  // Delete
  deleteDevice(id: string) {
    this.deviceRef = this.db.object('/dispositivos/' + id);
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