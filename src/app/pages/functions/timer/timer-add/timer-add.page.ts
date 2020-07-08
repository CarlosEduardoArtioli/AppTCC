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
  public timer: any;
  public mac: any;
  public week = [];
  public week1: any;
  public week2: any;
  public week3: any;
  public week4: any;
  public week5: any;
  public week6: any;
  public week7: any;
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
      console.log(week);

      if(this.week[0] != null) {
        this.week1 = this.week[0];
      } else {
        this.week1 = "";
      }

      if(this.week[1] != null) {
        this.week2 = this.week[1];
      } else {
        this.week2 = "";
      }

      if(this.week[2] != null) {
        this.week3 = this.week[2];
      } else {
        this.week3 = "";
      }

      if(this.week[3] != null) {
        this.week4 = this.week[3];
      } else {
        this.week4 = "";
      }

      if(this.week[4] != null) {
        this.week5 = this.week[4];
      } else {
        this.week5 = "";
      }

      if(this.week[5] != null) {
        this.week6 = this.week[5];
      } else {
        this.week6 = "";
      }

      if(this.week[6] != null) {
        this.week7 = this.week[6];
      } else {
        this.week7 = "";
      }


      console.log(this.week1);
      console.log(this.week2);
      console.log(this.week3);
      console.log(this.week4);
      console.log(this.week5);
      console.log(this.week6);
      console.log(this.week7);

      this.timerService.createTimer(timer, this.week1, this.week2, this.week3, this.week4, this.week5, this.week6, this.week7, mac);

    }
  }

  onChange(event) {
    alert("you habe selected id = " + event.target.value);
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
