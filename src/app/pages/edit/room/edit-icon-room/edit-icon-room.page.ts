import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-icon-room',
  templateUrl: './edit-icon-room.page.html',
  styleUrls: ['./edit-icon-room.page.scss'],
})
export class EditIconRoomPage implements OnInit {

  // Declaração de variáveis
  room: any;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'room' uma "foto" da rota, mais especificamente do 'room'
    this.room = this.actRoute.snapshot.paramMap.get('room');
    console.log(this.room);
  }

  ngOnInit() { }

  // Função para atualizar o icone do cômodo
  update(icone) {
    this.roomService.updateIcon(icone, this.room)
      .then(() => {
        this.router.navigate(['edit-room-page/', this.room]);
        this.changeIcon();
      })
      .catch(error => console.log(error));
  }

  // Função para aparecer um ion-toast após alterar o icone(perfumaria).
  async changeIcon() {
    const toast = await this.toastController.create({
      header: 'O icone foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
