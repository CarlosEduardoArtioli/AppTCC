import { Component, OnInit } from '@angular/core';
import { roomService } from '../../../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-room-page',
  templateUrl: './edit-room-page.page.html',
  styleUrls: ['./edit-room-page.page.scss'],
})
export class EditRoomPagePage implements OnInit {
// Declaração de variávies
updateDeviceForm: FormGroup;
room: any;

constructor(
  private roomService: roomService,
  private actRoute: ActivatedRoute,
  private router: Router,
  public fb: FormBuilder,
  public actionSheetController: ActionSheetController
) {
  // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'
  this.room = this.actRoute.snapshot.paramMap.get('room');
  this.roomService.getRoom(this.room).valueChanges().subscribe(res => {
    this.updateDeviceForm.setValue(res);
  });
}

// Função para quando a página for iniciada
ngOnInit() {
  // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
  this.updateDeviceForm = this.fb.group({
    name: [''],
    color: [''],
  })
  console.log(this.updateDeviceForm.value);
}

updateForm() {
  this.roomService.updateDevice(this.updateDeviceForm.value)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
}

}
