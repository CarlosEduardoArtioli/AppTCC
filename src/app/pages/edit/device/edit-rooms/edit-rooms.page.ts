import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../../services/room.service';
import { Room } from 'src/app/models/room.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.page.html',
  styleUrls: ['./edit-rooms.page.scss'],
})
export class EditRoomsPage implements OnInit {

  // Declaração de variáveis
  mac: any;
  Rooms = [];

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private roomService: RoomService,
    private toastController: ToastController,
  ) {
    // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getRooms();
  }

  getRooms() {
    // Atribui a variávei 'rommRes' o seguinte valor
    // Puxa a função 'getRoomList'
    const roomRes = this.roomService.getRoomList();
    // Pega os valores da lista de dispositivos
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

  // Função para atualizar o cômodo
  update(room, IconRoom) {
    this.deviceService.updateRoom(room, IconRoom, this.mac)
      .then(() => {
        this.router.navigate(['edit-device-page/', this.mac]);
        this.changeRoom();
      })
      .catch(error => console.log(error));
  }

  // Função para aparecer um ion-toast após alterar o cômodo(perfumaria).
  async changeRoom() {
    const toast = await this.toastController.create({
      header: 'O cômodo foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
