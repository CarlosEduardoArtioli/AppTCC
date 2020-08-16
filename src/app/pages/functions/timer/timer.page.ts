import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../../models/device.model';
import { DeviceService } from '../../../services/device.service';
import { AlertController } from '@ionic/angular';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  Devices = [];
  timer: any;

  constructor(
    private deviceService: DeviceService,
    private timerService: TimerService,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit() {

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
  }

  deleteTimer(mac: any, timer: any) {
    this.presentAlertConfirm(mac, timer);
  }

  async presentAlertConfirm(mac, timer) {
    const alert = await this.alertCtrl.create({
      header: 'LIMPAR!',
      message: 'Deseja limpar o timer?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.timerService.deleteTimer(mac, timer);
          }
        }
      ]
    });

    await alert.present();
  }
}

