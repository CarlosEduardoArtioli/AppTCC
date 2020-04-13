import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../../models/device.model';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-edit-device-list',
  templateUrl: './edit-device-list.page.html',
  styleUrls: ['./edit-device-list.page.scss'],
})
export class EditDeviceListPage implements OnInit {
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

  deleteDevice(id) {
    console.log(id)
    if (window.confirm('Tem certeza que deseja excluir?')) {
      this.aptService.deleteDevice(id)
    }
  }

}
