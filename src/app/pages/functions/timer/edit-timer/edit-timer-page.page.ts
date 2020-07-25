import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { Dispositivos } from '../../../../models/device.model';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-edit-timer-page',
  templateUrl: './edit-timer-page.page.html',
  styleUrls: ['./edit-timer-page.page.scss'],
})
export class EditDevicePagePage implements OnInit {
  // Declaração de variávies
  updateTimerForm: FormGroup;
  mac: any;
  name: any;
  Devices = [];
  timer: any;
  week: any;
  wt: any;

  constructor(
    private deviceService: DeviceService,
    private timerService: TimerService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController
  ) {
    // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.updateTimerForm.setValue(res);
      console.log(res);
    });
  }

  // Função para quando a página for iniciada
  ngOnInit() {
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.name = res.name;
      this.timer = res.timer;
      this.week = res.week;
      this.wt = res.wt;
    });
    console.log(this.name, this.timer, this.week, this.wt);

    // Chama a função 'fetchDevices()'
    this.fetchDevices();

  }

  updateForm() {
    this.timerService.updateTimer(this.timer, this.week, this.wt)
      .then(() => {
        this.router.navigate(['/menu/timer']);
      })
      .catch(error => console.log(error));
  }

  // Função para mostrar no console a lista de dispositivos
  fetchDevices() {
    // Pega os valores do caminho os subscreve no 'res'
    this.deviceService.getDeviceList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res);
    });
  }
}