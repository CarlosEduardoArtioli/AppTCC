import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from '../../shared/appointment.service';
import { ModalController } from '@ionic/angular';
import { ModalIconPage } from '../modal-icon/modal-icon.page';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  updateDeviceForm: FormGroup;
  id: any;
  imagem: string = "";

  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private modalCtrl: ModalController,
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getDevice(this.id).valueChanges().subscribe(res => {
      this.updateDeviceForm.setValue(res);
    });

    this.actRoute.queryParams.subscribe((data) => {
      this.imagem = data['imagem'];
    })
  }

  ngOnInit() {
    this.updateDeviceForm = this.fb.group({
      name: [''],
      status: [''],
      mac: [''],
      icon: ['']
    })
    console.log(this.updateDeviceForm.value)
  }

  updateForm() {
    this.aptService.updateDevice(this.id, this.updateDeviceForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalIconPage
    });

    modal.present();
  }
}
