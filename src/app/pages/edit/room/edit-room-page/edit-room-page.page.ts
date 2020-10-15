import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-edit-room-page',
  templateUrl: './edit-room-page.page.html',
  styleUrls: ['./edit-room-page.page.scss'],
})
export class EditRoomPagePage implements OnInit {
  // Declaração de variávies
  room: any;
  name: string;
  icon: string;
  iconName: string;
  novoNome: string;

  constructor(
    private roomService: RoomService,
    private actRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'room' uma "foto" da rota, mais especificamente do 'room'
    this.room = this.actRoute.snapshot.paramMap.get('room');
  }

  // Função para quando a página for iniciada
  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getRoom();
  }

  getRoom() {
    this.roomService.getRoom(this.room).valueChanges().subscribe(res => {
      this.name = res.name;
      this.icon = res.icon;
      this.iconName = res.iconName;
    });
  }
  // Funcão para aparecer o alert com o input que irá receber o novo nome do cômodo.
  async updateName() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Nome'.
      header: 'Novo Nome',
      // Gera inputs
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: data => {
            // if apenas para saber se o input não está vázio.
            if ((document.getElementById('newname') as HTMLInputElement).value !== '') {
              // novoNome será igual ao que está valor do input com Id 'newname'.
              this.novoNome = (document.getElementById('newname') as HTMLInputElement).value;
              // Puxa a função do ion-toast.
              this.newname();
              // Função para mudar o nome do cômodo.
              this.roomService.updateName(this.novoNome, this.room);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após salvar o novo nome do cômodo (perfumaria).
  async newname() {
    const toast = await this.toastController.create({
      header: 'O nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
