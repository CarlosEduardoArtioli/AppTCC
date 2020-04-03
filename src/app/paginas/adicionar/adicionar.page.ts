import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from '../../shared/appointment.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  deviceForm: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.deviceForm = this.fb.group({
      name: [''],
      status: [''],
      mac: [''],
      icon: ['icon.png']
    })
  }

  formSubmit() {
    if (!this.deviceForm.valid) {
      return false;
    } else {
      this.aptService.createDevice(this.deviceForm.value).then(res => {
        console.log(res)
        this.deviceForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });

    modal.present();
  }
}