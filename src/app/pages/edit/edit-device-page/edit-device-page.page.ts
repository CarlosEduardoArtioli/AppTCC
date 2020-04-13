import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../services/device.service';
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
  id: any;
  imagem = "";

  constructor(
    private aptService: DeviceService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getDevice(this.id).valueChanges().subscribe(res => {
      this.updateDeviceForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateDeviceForm = this.fb.group({
      name: [''],
      status: [''],
      mac: [''],
      icon: ['']
    })
    console.log(this.updateDeviceForm.value);
  }

  updateForm() {
    this.aptService.updateDevice(this.id, this.updateDeviceForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  async escolherImagem() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Imagens',
      buttons: [
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
        {
        text: 'Lâmpada',
        icon: 'trash',
        handler: () => {
          this.imagem = "Lâmpada"
        }
      }, {
        text: 'Televisão',
        icon: 'share',
        handler: () => {
          this.imagem = "Televisão"
        }
      }, {
        text: 'Ventilador',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.imagem = "Ventilador"
        }
      }]
    });
    await actionSheet.present();
  }

}
