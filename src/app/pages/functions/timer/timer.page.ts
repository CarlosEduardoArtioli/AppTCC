import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../../models/device.model';
import { DeviceService } from '../../../services/device.service';
import { AlertController } from '@ionic/angular';
import { TimerService } from 'src/app/services/timer.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  Devices = [];
  Timers = [];
  macs: any;


  constructor(
    private db: AngularFireDatabase,
    private deviceService: DeviceService,
    private timerService: TimerService,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    const timerRes = this.timerService.getTimerList(this.macs);
    // Pega os valores da lista de dispositivos
    timerRes.snapshotChanges().subscribe(res => {
      // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
      this.Timers = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Timers.push(a as TimerPage);        
      });
    });

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

  async addTimer() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
    });
    await alert.present();
  }

  // Função para mostrar no console a lista de dispositivos
  fetchDevices() {
    // Pega os valores do caminho os subscreve no 'res'
    this.deviceService.getDeviceList().valueChanges().subscribe(res => {
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


