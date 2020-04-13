import { Component, OnInit } from '@angular/core';
import { Dispositivos } from '../../../models/device.model';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-edit-device-list',
  templateUrl: './edit-device-list.page.html',
  styleUrls: ['./edit-device-list.page.scss'],
})
export class EditDeviceListPage implements OnInit {
  // Declaração de variáveis
  Devices = [];

  constructor(
    private aptService: DeviceService
  ) { }

  // Função quando a página é iniciada
  ngOnInit() {
    // Chama a função 'fetchDevices()'
    this.fetchDevices();

    // Atribui a variávei 'deviceRes' o seguinte valor
    // Puxa a função 'getDeviceList'
    let deviceRes = this.aptService.getDeviceList();
    // Pega os valores da lista de dispositivos
    deviceRes.snapshotChanges().subscribe(res => {
      // "Subscreve" a variável devices com os dispostivos e seus valores
      this.Devices = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivos);
      })
    })
  }

  // Função para mostrar a lista de dispositvos no console
  fetchDevices() {
    // "Puxa" a função 'getDeviceList' e vê a lista de dispositivos
    this.aptService.getDeviceList().valueChanges().subscribe(res => {
      // Escreve no console a lista de dispositivos
      console.log(res)
    })
  }


  // Função para deletar o dispositivo que recebe o parâmetro 'id'
  deleteDevice(id: any) {
    // Escreve no console o 'id'
    console.log(id)
    // Se for confirmado a mensagem
    if (window.confirm('Tem certeza que deseja excluir?')) {
      // "Puxa" a função 'deleteDevice' passando o parâmetro id
      this.aptService.deleteDevice(id)
    }
  }

}
