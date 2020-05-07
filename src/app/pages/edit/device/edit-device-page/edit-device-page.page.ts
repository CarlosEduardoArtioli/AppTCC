import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-device-page',
  templateUrl: './edit-device-page.page.html',
  styleUrls: ['./edit-device-page.page.scss'],
})
export class EditDevicePagePage implements OnInit {
  // Declaração de variávies
  updateDeviceForm: FormGroup;
  mac: any;
  imagem = "";

  constructor(
    private aptService: DeviceService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController
  ) {
    // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    this.aptService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.imagem = res.icon;
      this.updateDeviceForm.setValue(res);
    });
  }

  // Função para quando a página for iniciada
  ngOnInit() {
    // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
    this.updateDeviceForm = this.fb.group({
      name: [''],
      mac: [''],
      icon: [''],
    })
    console.log(this.updateDeviceForm.value);
    this.aptService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.imagem = res.icon;
    });
  }

  updateForm() {
    this.aptService.updateDevice(this.updateDeviceForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  // Função para aparecer os ícones para ser selecionado.
  async escolherImagem() {
    // Cria um actionSheet.
    const actionSheet = await this.actionSheetController.create({
      // Header com nome 'Imagens'.
      header: 'Imagens',
      // Gera botões
      buttons: [
        {
          // Botão cancelar
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
        {
          text: 'Lâmpada',
          icon: '/assets/svg/Lâmpada.svg',
          handler: () => {
            this.imagem = "Lâmpada"
          }
        }, {
          text: 'Televisão',
          icon: '/assets/svg/Televisão.svg',
          handler: () => {
            this.imagem = "Televisão"
          }
        }, {
          text: 'Ventilador',
          icon: '/assets/svg/Ventilador.svg',
          handler: () => {
            this.imagem = "Ventilador"
          }
        }]
    });
    await actionSheet.present();
  }

}
