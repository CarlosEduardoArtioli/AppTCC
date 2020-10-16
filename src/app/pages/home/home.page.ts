import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../models/device.model';
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
  }

  async ionViewWillEnter() {
    await this.getDevices();
    await this.getRooms();
  }

  getDevices() {
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
        this.Devices.push(a as Dispositivo);
      });
    });
  }

  getRooms() {
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

  // Função para mudar o status do dispositivo
  mudaStatus(id: any) {
    // Chama a função mudaStatus no AppointmentService
    this.deviceService.mudaStatus(id);
  }
}
