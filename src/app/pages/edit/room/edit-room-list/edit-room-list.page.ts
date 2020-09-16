import { Component, OnInit } from '@angular/core';
import { Room } from '../../../../models/room.model';
import { RoomService } from '../../../../services/room.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-room-list',
  templateUrl: './edit-room-list.page.html',
  styleUrls: ['./edit-room-list.page.scss'],
})
export class EditRoomListPage implements OnInit {

  // Declaração de variáveis
  Rooms = [];
  newRoom: any;

  constructor(
    private roomService: RoomService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Atribui a variávei 'roomRes' o seguinte valor
    // Puxa a função 'getRoomList'
    const roomRes = this.roomService.getRoomList();
    // Pega os valores da lista de cômodos
    roomRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável Rooms com os cômodos e seus valores
      this.Rooms = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Rooms.push(a as Room);
      });
    });
  }

  // Funcão para aparecer o alert com o input que irá receber nome do cômodo.
  async addRoom() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Cômodo'.
      header: 'Novo Cômodo',
      // Gera inputs
      inputs: [
        {
          name: 'new-room',
          id: 'newroom',
          placeholder: 'Escreva o nome do Cômodo',
          value: this.newRoom
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            // if apenas para saber se o input não está vázio.
            if ((document.getElementById('newroom') as HTMLInputElement).value !== '') {
              // this.newRoom será igual ao que está valor do input com Id 'newroom'.
              this.newRoom = (document.getElementById('newroom') as HTMLInputElement).value;
              // Puxa a função do ion-toast.
              this.newroom();
              // Função para criar o cômodo.
              this.roomService.createRoom(this.newRoom, 'Casa');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após criar o novo cômodo (perfumaria).
  async newroom() {
    const toast = await this.toastController.create({
      header: 'Cômodo Adicionado!',
      duration: 2000
    });
    await toast.present();
  }

  // Chama o alert controll e passa o cômodo
  deleteRoom(room: any) {
    this.presentAlertConfirm(room);
  }

  // Função para verificar se o usuário deseja mesmo excluir o cômodo
  async presentAlertConfirm(room) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o cômodo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.roomService.deleteRoom(room);
          }
        }
      ]
    });

    await alert.present();
  }

}
