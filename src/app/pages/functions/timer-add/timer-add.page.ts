import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { AlertController } from '@ionic/angular';
import { Dispositivos } from 'src/app/models/device.model';

@Component({
  selector: 'app-timer-add',
  templateUrl: './timer-add.page.html',
  styleUrls: ['./timer-add.page.scss'],
})
export class TimerAddPage implements OnInit {
  date = new Date().toISOString();
  customPickerOptions: any;
  i = 1;
  timer: any;

  Devices = [];

  constructor(
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

  myLoop() {         //  create a loop function
    setTimeout(() => {   //  call a 3s setTimeout when the loop is called
      this.date = new Date().toISOString();
      console.log(this.date);                 //  increment the counter
      console.log('Tô Funfando Timer');
      if (this.i < 99999) {
        //  if the counter < 10, call the loop function
        this.myLoop();             //  ..  again which will trigger another 
      };                      //  ..  setTimeout()
    }, 2000);
  }

  done() {
    this.timer = document.getElementById("timer");
    console.log(this.timer.value);
  }

  myLoop2() {         //  create a loop function
    setTimeout(() => {   //  call a 3s setTimeout when the loop is called;
      if (this.timer == this.date) {

      }
      if (this.i < 99999) {
        //  if the counter < 10, call the loop function
        this.myLoop();             //  ..  again which will trigger another 
      };                      //  ..  setTimeout()
    }, 2000);
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
