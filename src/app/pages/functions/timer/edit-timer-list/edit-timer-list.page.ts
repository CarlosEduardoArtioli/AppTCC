import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Timer } from '../../../../models/timer.model';

@Component({
  selector: 'app-edit-timer-list',
  templateUrl: './edit-timer-list.page.html',
  styleUrls: ['./edit-timer-list.page.scss'],
})
export class EditTimerListPage implements OnInit {

  // Declaração de variáveis
  Timers = [];
  mac: string;

  constructor(
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getTimers();
  }

  getTimers() {
    const timerRes = this.timerService.getTimerList(this.mac);
    // Pega os valores da lista de dispositivos
    timerRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Timers = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Timers.push(a as Timer);
      });
    });
  }

  // Função para deletar o timer
  deleteTimer(mac: any, timer: any) {
    this.presentAlertConfirm(mac, timer);
  }

  // Função para adicionar um timer
  addTimer() {
    this.router.navigate(['/add-timer-page/', this.mac]);
  }

  // Função para verificar se o usuário deseja mesmo excluir o timer
  async presentAlertConfirm(mac, timer) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o timer?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.timerService.deleteTimer(mac, timer);
          }
        }
      ]
    });

    await alert.present();
  }
}
