import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-icon-device',
  templateUrl: './modal-icon-device.page.html',
  styleUrls: ['./modal-icon-device.page.scss'],
})
export class ModalIconDevicePage implements OnInit {

  public Imagens: Array<Object> = [
    { nome: "Televisão", local: "assets/svg/Televisão.svg", isChecked: "false" },
    { nome: "Lâmpada", local: "assets/svg/Lâmpada.svg", isChecked: "false" },
    { nome: "Ventilador", local: "assets/svg/Ventilador.svg", isChecked: "false" }];

  public imagemselecionada: String = "Nenhuma";

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  fecharModal() {
    this.modalCtrl.dismiss();
  }

  checkBox(imagem) {
    if (this.imagemselecionada != imagem.nome) {
      this.imagemselecionada = imagem.nome;
      console.log(this.imagemselecionada);
    }
  }

  selecionarImagem() {
    this.router.navigate(['edit-device-page/:id'], { queryParams: { imagem: this.imagemselecionada } });
    this.fecharModal();
  }

}