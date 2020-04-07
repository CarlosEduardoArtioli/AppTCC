import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from '../../services/device/device.service';

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
    public actRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.deviceForm = this.fb.group({
      name: [''],
      status: [''],
      mac: [''],
      icon: ['']
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
}