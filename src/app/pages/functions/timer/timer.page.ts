import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dispositivos } from '../../../models/device.model';
import { DeviceService } from '../../../services/device.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  Devices = [];

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number; // Em segundos

  interval;

  startDuration = 0.09;

  state: 'start' | 'stop' = 'stop';

  timerTemp: any;

  constructor(
    private aptService: DeviceService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    let deviceRes = this.aptService.getDeviceList();
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

  startTimer(duration: number) {
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue();
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < -1) {
      this.startTimer(this.startDuration);
    }
  }

  async addTimer() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Nome'.
      header: 'Tempo para Desligamento/Ligamento',
      // Gera inputs
      inputs: [
        {
          name: 'time',
          id: 'time',
          placeholder: 'Digite o tempo desejado',
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            if ((<HTMLInputElement>document.getElementById('time')).value != "") {
              this.timerTemp = (<HTMLInputElement>document.getElementById('time')).value;
              this.startTimer(this.timerTemp);
              
              console.log(this.timerTemp);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para mostrar no console a lista de dispositivos
  fetchDevices() {
    // Pega os valores do caminho os subscreve no 'res'
    this.aptService.getDeviceList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res)
    })
  }

  // Função para mudar o status do dispositivo
  mudaStatus(id: any) {
    // Chama a função mudaStatus no AppointmentService
    this.aptService.mudaStatus(id);
  }
}


