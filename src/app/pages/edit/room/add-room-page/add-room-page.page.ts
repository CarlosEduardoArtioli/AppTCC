import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { roomService } from '../../../../services/room.service';

@Component({
  selector: 'app-add-room-page',
  templateUrl: './add-room-page.page.html',
  styleUrls: ['./add-room-page.page.scss'],
})
export class AddRoomPagePage implements OnInit {
  roomForm: FormGroup;
  room: any;

  constructor(
    private roomService: roomService,
    private router: Router,
    public fb: FormBuilder,
    public actRoute: ActivatedRoute,
  ) {}

  // Função para quando a página for iniciada
  ngOnInit() {
    // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
    this.roomForm = this.fb.group({
      name: [''],
      color: ['']
    })
  }


  // Função para enviar o formulário
  formSubmit() {
    // Se o formulário for diferente de válido
    if (!this.roomForm.valid) {
      // Retorna um boolean de valor false e não executa o envio do formulário
      return false;
      // Se o formulário for válido
    } else {
       this.room = this.roomForm.value.name;
      // "Puxa" a função 'createDevice' do DeviceService e passa o valor do 'deviceForm'
      this.roomService.createRoom(this.roomForm.value, this.room)
        // "Reseta" o formulário para uma nova inserção de dados
        this.roomForm.reset();
        // Navega para a página 'home'
        this.router.navigate(['/home']);
    }
  }
}
