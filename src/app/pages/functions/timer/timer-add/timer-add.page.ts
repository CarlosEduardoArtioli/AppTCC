import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { AlertController } from '@ionic/angular';
import { Dispositivos } from 'src/app/models/device.model';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer-add',
  templateUrl: './timer-add.page.html',
  styleUrls: ['./timer-add.page.scss'],
})
export class TimerAddPage implements OnInit {
  date = new Date().toISOString();
  i = 1;
  timer: any;
  mac: any;
  week: any;
  customDayShortNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  Devices = [];


  constructor(
    private timerService: TimerService,
    private deviceService: DeviceService,
    private alertCtrl: AlertController
  ) {


  }

  ngOnInit() {
    this.myLoop();
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    let deviceRes = this.deviceService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
      this.Devices = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      })
    })
  }

  myLoop() {
    setTimeout(() => {
      this.date = new Date().toISOString();
      if (this.i < 99999) {
        this.myLoop();
      };                      
    }, 2000);
  }

  done(timer: any, week: any, mac: any) {
    // if apenas para saber se o input não está vázio.
    if (timer != "" && week != "" && mac != "") {
      timer = timer.slice(11, 19);

      this.timerService.createTimer(timer, week, mac);

    }
  }

  onChange(event) {
    alert("you habe selected id = "+event.target.value);
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
      console.log(res)
    })
  }

  // Função para mudar o status do dispositivo
  mudaStatus(id: any) {
    // Chama a função mudaStatus no AppointmentService
    this.deviceService.mudaStatus(id);
  }
}
