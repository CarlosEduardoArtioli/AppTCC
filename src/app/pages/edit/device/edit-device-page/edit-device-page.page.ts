import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-device-page',
  templateUrl: './edit-device-page.page.html',
  styleUrls: ['./edit-device-page.page.scss'],
})
export class EditDevicePagePage implements OnInit {
  // Declaração de variávies
  mac: any;
  novoNome = '';
  device = {
    ap: '',
    icon: {
      icon: '',
      iconName: '',
    },
    mac: '',
    name: '',
    room: {
      icon: '',
      name: '',
    }
  };

  constructor(
    private deviceService: DeviceService,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  // Função para quando a página for iniciada
  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getDevice();
  }

  getDevice() {
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.device = res;
    });
  }

  // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
  async updateName() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Nome'.
      header: 'Novo Nome',
      // Gera inputs
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: data => {
            // if apenas para saber se o input não está vázio.
            if ((document.getElementById('newname') as HTMLInputElement).value !== '') {
              // this.nome será = ao que está valor do input com Id 'newname'.
              this.novoNome = (document.getElementById('newname') as HTMLInputElement).value;
              // Puxa a função do ion-toast.
              this.newname();
              // Função para mudar o nome do usuário.
              this.deviceService.updateName(this.novoNome, this.mac);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
  async newname() {
    const toast = await this.toastController.create({
      header: 'O nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
