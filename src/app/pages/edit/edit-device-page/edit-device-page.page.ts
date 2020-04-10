import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-device-page',
  templateUrl: './edit-device-page.page.html',
  styleUrls: ['./edit-device-page.page.scss'],
})
export class EditDevicePagePage implements OnInit {
  updateDeviceForm: FormGroup;
  id: any;
  imagem: string = "";

  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
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

  }

}
