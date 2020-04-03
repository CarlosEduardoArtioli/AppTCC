import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../shared/Appointment';
import { AppointmentService } from '../../shared/appointment.service';

@Component({
  selector: 'app-escolha-editar',
  templateUrl: './escolha-editar.page.html',
  styleUrls: ['./escolha-editar.page.scss'],
})

export class EscolhaEditarPage implements OnInit {
  Devices = [];

  constructor(
    private aptService: AppointmentService
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

  deleteDevice(id) {
    console.log(id)
    if (window.confirm('Tem certeza que deseja excluir?')) {
      this.aptService.deleteDevice(id)
    }
  }
}
