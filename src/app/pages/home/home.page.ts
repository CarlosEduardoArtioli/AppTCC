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

  ngOnInit() {
    this.fetchDevices();
    let deviceRes = this.aptService.getDeviceList();
    deviceRes.snapshotChanges().subscribe(res => {
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
  mudaStatus(id){
    // Chama a função mudaStatus no AppointmentService
     this.aptService.mudaStatus(id);
  }
}