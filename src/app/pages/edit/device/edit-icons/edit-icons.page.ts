import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-icons',
  templateUrl: './edit-icons.page.html',
  styleUrls: ['./edit-icons.page.scss'],
})
export class EditIconsPage implements OnInit {

  mac: any;

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    console.log(this.mac);
   }

  ngOnInit() {
  }

  update(icone) {
    this.deviceService.updateIcon(icone, this.mac)
      .then(() => {
        this.router.navigate(['edit-device-page/', this.mac]);
        this.changeIcon();
      })
      .catch(error => console.log(error));
  }

   // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
   async changeIcon() {
    const toast = await this.toastController.create({
      header: 'O icone foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
