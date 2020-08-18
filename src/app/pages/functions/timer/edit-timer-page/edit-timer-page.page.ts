import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TimerService } from 'src/app/services/timer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-timer-page',
  templateUrl: './edit-timer-page.page.html',
  styleUrls: ['./edit-timer-page.page.scss'],
})
export class EditTimerPagePage implements OnInit {

  // Declaração de variávies
  updateTimerForm: FormGroup;
  mac: any;
  name: any;
  Devices = [];
  timer: any;
  dateTime = '';
  week1: any;
  week2: any;
  week3: any;
  week4: any;
  week5: any;
  week6: any;
  week7: any;
  newWeek: any;
  action = '';

  constructor(
    private timerService: TimerService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    this.timer = this.actRoute.snapshot.paramMap.get('timer');
    this.timerService.getTimer(this.timer, this.mac).valueChanges().subscribe(res => {
      this.action = res.action;
      this.dateTime = res.timer;
      this.week1 = res.week1;
      this.week2 = res.week2;
      this.week3 = res.week3;
      this.week4 = res.week4;
      this.week5 = res.week5;
      this.week6 = res.week6;
      this.week7 = res.week7;
      console.log(res);
    });
  }

  // Função para quando a página for iniciada
  ngOnInit() { }

  atualizar() {
    console.log(this.action);
    console.log(this.dateTime);
    console.log(this.newWeek);

    if (this.newWeek === undefined) {
      this.alert('Insira o horário!');
    }

    const segunda = this.newWeek.indexOf('seg');
    const terca = this.newWeek.indexOf('ter');
    const quarta = this.newWeek.indexOf('qua');
    const quinta = this.newWeek.indexOf('qui');
    const sexta = this.newWeek.indexOf('sex');
    const sabado = this.newWeek.indexOf('sab');
    const domingo = this.newWeek.indexOf('dom');

    console.log(segunda);
    console.log(terca);
    console.log(quarta);
    console.log(quinta);
    console.log(sexta);
    console.log(sabado);
    console.log(domingo);

    if (segunda !== -1) {
      this.week1 = 'seg';
    } else {
      this.week1 = '';
    }
    if (terca !== -1) {
      this.week2 = 'ter';
    } else {
      this.week2 = '';
    }
    if (quarta !== -1) {
      this.week3 = 'qua';
    } else {
      this.week3 = '';
    }
    if (quinta !== -1) {
      this.week4 = 'qui';
    } else {
      this.week4 = '';
    }
    if (sexta !== -1) {
      this.week5 = 'sex';
    } else {
      this.week5 = '';
    }
    if (sabado !== -1) {
      this.week6 = 'sab';
    } else {
      this.week6 = '';
    }
    if (domingo !== -1) {
      this.week7 = 'dom';
    } else {
      this.week7 = '';
    }

    console.log(this.week1);
    console.log(this.week2);
    console.log(this.week3);
    console.log(this.week4);
    console.log(this.week5);
    console.log(this.week6);
    console.log(this.week7);

    // tslint:disable-next-line: max-line-length
    if (this.week1 !== 'seg' && this.week2 !== 'ter' && this.week3 !== 'qua' && this.week4 !== 'qui' && this.week5 !== 'sex' && this.week6 !== 'sab' && this.week7 !== 'dom') {
      this.alert('Insira os dias da semana!');
    } else
      if (this.action === '') {
        this.alert('Insira a ação!');
      } else
        if (this.dateTime === '') {
          this.alert('Insira o horário!');
        } else {
          this.updateForm();
        }
  }

  updateForm() {
    this.timerService.updateTimer(this.action, this.dateTime, this.week1, this.week2, this.week3,
      this.week4, this.week5, this.week6, this.week7, this.timer, this.mac)
      .then(() => {
        this.router.navigate(['/menu/edit-timer-list']);
      })
      .catch(error => console.log(error));
  }

  // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
  async alert(mensage) {
    const toast = await this.toastController.create({
      header: mensage,
      duration: 2000
    });
    await toast.present();
  }
}
