import { Component, OnInit, ViewChild } from '@angular/core';
import { Dispositivos } from '../../models/device.model';
import { DeviceService } from '../../services/device.service';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  // Declaração de variáveis
  Devices = [];
  Rooms = [];
  selectTabs = 'all';

  constructor(
    private deviceService: DeviceService,
    private roomService: RoomService
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    this.fetchRooms();
    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    const deviceRes = this.deviceService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
      this.Devices = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      });
    });

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    const roomRes = this.roomService.getRoomList();
    // Pega os valores da lista de dispositivos
    roomRes.snapshotChanges().subscribe(res => {
      // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
      this.Rooms = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Rooms.push(a as Room);
      });
    });
  }

  // Função para mostrar no console a lista de dispositivos
  fetchDevices() {
    // Pega os valores do caminho os subscreve no 'res'
    this.deviceService.getDeviceList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res);
    });
  }

  // Função para mostrar no console a lista de dispositivos
  fetchRooms() {
    // Pega os valores do caminho os subscreve no 'res'
    this.roomService.getRoomList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res);
    });
  }

  // Função para mudar o status do dispositivo
  mudaStatus(id: any) {
    // Chama a função mudaStatus no AppointmentService
     this.deviceService.mudaStatus(id);
  }
}
