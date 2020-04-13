import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../models/device.model';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Devices = [];

  constructor(
    private aptService: DeviceService
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    let deviceRes = this.aptService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Devices = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      })
    })
  }

  fetchDevices() {
    this.aptService.getDeviceList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  // Função para mudar o status do dispositivo
  mudaStatus(id: any){
    // Chama a função mudaStatus no AppointmentService
     this.aptService.mudaStatus(id);
  }
}