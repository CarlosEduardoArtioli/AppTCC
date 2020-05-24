import { Component, OnInit } from '@angular/core';
import { Room } from '../../../../models/room.model';
import { roomService } from '../../../../services/room.service';
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
    private roomService: roomService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    let roomRes = this.roomService.getRoomList();
    // Pega os valores da lista de dispositivos
    roomRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Rooms = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Rooms.push(a as Room); 
      })
    })
  }

  // Função para mostrar a lista de dispositvos no console
  fetchDevices() {
    // "Puxa" a função 'getDeviceList' e vê a lista de dispositivos
    this.roomService.getRoomList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res)
    })
  }


  // Função para deletar o dispositivo que recebe o parâmetro 'id'
  deleteRoom(room: any) {
    // Escreve no console o 'id'
    console.log(room)
    // Se for confirmado a mensagem
    if (window.confirm('Tem certeza que deseja excluir?')) {
      // "Puxa" a função 'deleteDevice' passando o parâmetro id
      this.roomService.deleteDevice(room)
    }
  }

  // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
  async addRoom() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Nome'.
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
            if ((<HTMLInputElement>document.getElementById('newroom')).value != "") {
              // this.nome será = ao que está valor do input com Id 'newname'.
              this.newRoom = (<HTMLInputElement>document.getElementById('newroom')).value;
              // Puxa a função do ion-toast.
              this.newroom();
              // Função para mudar o nome do usuário.
              this.roomService.createRoom(this.newRoom)
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
  async newroom() {
    const toast = await this.toastController.create({
      header: 'Cômodo Adicionado!',
      duration: 2000
    });
    await toast.present();
  }

}