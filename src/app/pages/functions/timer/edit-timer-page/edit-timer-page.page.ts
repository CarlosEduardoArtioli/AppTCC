import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  mensagens_validacao = {
    action: [
      { tipo: 'required', mensagem: 'O campo ação é obrigatório!' },
    ],
    dateTime: [
      { tipo: 'required', mensagem: 'O campo horário é obrigatório!' },
    ],
    newWeek: [
      { tipo: 'required', mensagem: 'O campo horário é obrigatório!' },
    ]
  };

  constructor(
    private timerService: TimerService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    // Atribui a variável 'timer' uma "foto" da rota, mais especificamente do 'timer'
    this.timer = this.actRoute.snapshot.paramMap.get('timer');

    this.updateTimerForm = fb.group({
      action: ['', Validators.compose([Validators.required])],
      dateTime: ['', Validators.compose([Validators.required])],
      newWeek: ['', Validators.compose([Validators.required])],
    });

    this.getTimer();
  }

  // Função para quando a página for iniciada
  ngOnInit() { }

  async getTimer() {
    // Subscreve as variáveis com seus valores respectivos
    await this.timerService.getTimer(this.timer, this.mac).valueChanges().subscribe(res => {
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

  // Função para verificar os dados do timer
  atualizar() {

    const segunda = this.newWeek.indexOf('seg');
    const terca = this.newWeek.indexOf('ter');
    const quarta = this.newWeek.indexOf('qua');
    const quinta = this.newWeek.indexOf('qui');
    const sexta = this.newWeek.indexOf('sex');
    const sabado = this.newWeek.indexOf('sab');
    const domingo = this.newWeek.indexOf('dom');

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

    if (this.updateTimerForm.valid) {
      this.updateForm();
    } else {
      this.alert('Formulário Inválido');
    }
  }

  // Função para atualizar/criar o timer
  updateForm() {
    this.timerService.updateTimer(this.action, this.dateTime, this.week1, this.week2, this.week3,
      this.week4, this.week5, this.week6, this.week7, this.timer, this.mac)
      .then(() => {
        this.router.navigate(['/menu/edit-timer-list']);
      })
      .catch(error => console.log(error));
  }

  // Função para aparecer um ion-toast (perfumaria).
  async alert(mensage) {
    const toast = await this.toastController.create({
      header: mensage,
      duration: 2000
    });
    await toast.present();
  }
}
