import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  deviceForm: FormGroup;

  constructor(
    private aptService: DeviceService,
    private router: Router,
    public fb: FormBuilder,
    public actRoute: ActivatedRoute,
  ) {}

  // Função para quando a página for iniciada
  ngOnInit() {
    // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
    this.deviceForm = this.fb.group({
      name: [''],
      status: [''],
      mac: [''],
      icon: ['']
    })
  }

  // Função para enviar o formulário
  formSubmit() {
    // Se o formulário for diferente de válido
    if (!this.deviceForm.valid) {
      // Retorna um boolean de valor false e não executa o envio do formulário
      return false;
      // Se o formulário for válido
    } else {
      // "Puxa" a função 'createDevice' do DeviceService e passa o valor do 'deviceForm'
      this.aptService.createDevice(this.deviceForm.value).then(res => {
        // Escreve no console o valor do formulário
        console.log(res)
        // "Reseta" o formulário para uma nova inserção de dados
        this.deviceForm.reset();
        // Navega para a página 'home'
        this.router.navigate(['/home']);
      })
        // Caso ocorra um erro, ele o escreve no console
        .catch(error => console.log(error));
    }
  }
}