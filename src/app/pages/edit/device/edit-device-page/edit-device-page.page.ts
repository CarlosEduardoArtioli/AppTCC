import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-edit-device-page',
  templateUrl: './edit-device-page.page.html',
  styleUrls: ['./edit-device-page.page.scss'],
})
export class EditDevicePagePage implements OnInit {
  // Declaração de variávies
  mac: any;
  icone = '';
  comodo = '';
  name = '';
  Icons = [
    {
      name: 'Lâmpada',
      icon: '/assets/svg/Lâmpada.svg',
    },
    {
      name: 'Televisão',
      icon: '/assets/svg/Televisão.svg',
    },
    {
      name: 'Ventilador',
      icon: '/assets/svg/Ventilador.svg',
    }
  ];
  Rooms = [];

  constructor(
    private roomService: RoomService,
    private deviceService: DeviceService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController
  ) {
    // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.icone = res.icon;
      this.comodo = res.room;
      this.name = res.name;
      console.log(res);
    });
  }

  // Função para quando a página for iniciada
  ngOnInit() {
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.name = res.name;
      this.icone = res.icon;
      this.comodo = res.room;
    });
    console.log(this.comodo);

    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    const roomRes = this.roomService.getRoomList();
    // Pega os valores da lista de dispositivos
    roomRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Rooms = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Rooms.push(a as Room);
      });
    });
  }

  // Função para mostrar a lista de dispositvos no console
  fetchDevices() {
    // "Puxa" a função 'getDeviceList' e vê a lista de dispositivos
    this.roomService.getRoomList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res);
    });
  }

  update() {
    this.deviceService.updateDevice(this.name, this.icone, this.comodo)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
