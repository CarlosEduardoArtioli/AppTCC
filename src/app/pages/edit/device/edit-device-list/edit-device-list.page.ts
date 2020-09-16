import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../../../models/device.model';
import { DeviceService } from '../../../../services/device.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-device-list',
  templateUrl: './edit-device-list.page.html',
  styleUrls: ['./edit-device-list.page.scss'],
})

export class EditDeviceListPage implements OnInit {
  // Declaração de variáveis
  Devices = [];

  constructor(
    private deviceService: DeviceService,
    private alertCtrl: AlertController,
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    const deviceRes = this.deviceService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Devices = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      });
    });
  }

  // Função para deletar o dispositivo que recebe o parâmetro 'id'
  deleteDevice(id: any) {
    this.presentAlertConfirm(id);
  }

  // Função que apresenta uma mensagem perguntado se o usuário deseja excluir o dispositivo
  async presentAlertConfirm(id) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o dispositivo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.deviceService.deleteDevice(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
