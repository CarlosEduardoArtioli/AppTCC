import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { TimerService } from 'src/app/services/timer.service';
import { Dispositivos } from 'src/app/models/device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-timer-list',
  templateUrl: './edit-timer-list.page.html',
  styleUrls: ['./edit-timer-list.page.scss'],
})
export class EditTimerListPage implements OnInit {

  // Declaração de variáveis
  Devices = [];
  timer: any;
  timerShow: any;

  constructor(
    private deviceService: DeviceService,
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private router: Router
  ) {

  }

  ngOnInit() {

    const deviceRes = this.deviceService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      this.Devices = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      });
    });
  }

  // Função para deletar o timer
  deleteTimer(mac: any, timer: any) {
    this.presentAlertConfirm(mac, timer);
  }

  // Função para adicionar um timer
  addTimer(mac, timer1, timer2, timer3, timer4) {

    if (timer1 === false) {
      this.timerShow = 'timer1';
    } else
      if (timer2 === false) {
        this.timerShow = 'timer2';
      } else
        if (timer3 === false) {
          this.timerShow = 'timer3';
        } else
          if (timer4 === false) {
            this.timerShow = 'timer4';
          }

    this.timerService.addTimer(mac, this.timerShow).then(() => {
      this.router.navigate(['/edit-timer-page/', mac, this.timerShow]);
    })
      .catch(error => console.log(error));
  }

  // Função para verificar se o usuário deseja mesmo excluir o timer
  async presentAlertConfirm(mac, timer) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o timer?',
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


