import { Component, OnInit } from '@angular/core';
import { Room } from '../../../../models/room.model';
import { roomService } from '../../../../services/room.service';

@Component({
  selector: 'app-edit-room-list',
  templateUrl: './edit-room-list.page.html',
  styleUrls: ['./edit-room-list.page.scss'],
})
export class EditRoomListPage implements OnInit {

  // Declaração de variáveis
  Rooms = [];

  constructor(
    private roomService: roomService
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

}