import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController, AlertController } from '@ionic/angular';

// Importação do Model do usuário
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import '@firebase/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // Declaração das variáveis

  // Variável pages que fornece o titulo, url e icone das páginas
  pages: { title: string; url: string; icon: string; }[];

  // Variável user
  public user: User = new User('', '', 'https://placehold.it/80');

  // Variável showComponent
  showComponent: boolean;
  novoNome: any;
  image: any = [];
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private alertCtrl: AlertController,
    private toastController: ToastController

  ) {
    router.events.forEach((event) => {
      if (this.router.url === '/login') {
        this.showComponent = false
      }
      else {
        if (this.router.url === '/signup') {
          this.showComponent = false
        } else {
          if (this.router.url === '/take-photo') {
          this.showComponent = false
          } else {
          this.showComponent = true;
          this.initializeApp();
          }
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Chama a função sideMenu()
      this.sideMenu();
      // Atribui a variável user o usuário logado no app
      this.user = JSON.parse(localStorage.getItem('app.user'));
      if (this.user.name == "") {
        localStorage.setItem('app.user', JSON.stringify(new User(this.user.email, this.user.email, 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')));
      }
    });
  }

  async alterarNome() {

    const alert = await this.alertCtrl.create({

      header: 'Novo Nome',
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.user = JSON.parse(localStorage.getItem('app.user'));
            if ((<HTMLInputElement>document.getElementById('newname')).value != "") {
              this.novoNome = (<HTMLInputElement>document.getElementById('newname')).value;
              localStorage.setItem('app.user', JSON.stringify(new User(this.novoNome, this.user.email, this.user.image)));
              this.newname();
              this.user = JSON.parse(localStorage.getItem('app.user'));
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async newname() {
    const toast = await this.toastController.create({
      header: 'Seu nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

  sideMenu() {
    this.pages =
      [
        {
          title: "Dispositivos",
          url: "home",
          icon: "hardware-chip"
        },
        {
          title: "Editar",
          url: "edit-device-list",
          icon: "create"
        },
        {
          title: "Adicionar",
          url: "adicionar",
          icon: "add-circle"
        },
      ]
  }

  // Função para aparecer opções ao clicar no usuário
  async showOptions() {
    // Cria um actionSheet
    const actionSheet = await this.actionSheetCtrl.create({
      // Header com nome 'Opções'
      header: 'Opções',
      // Gera botões
      buttons: [
        {
          text: 'Alterar Nome',
          icon: 'person',
          handler: () => {
            this.alterarNome();
          }
        },
        {
          text: 'Alterar Foto',
          icon: 'person-circle',
          handler: () => {
            this.navCtrl.navigateRoot('take-photo');
          }
        },
        {
          text: 'Logout',
          icon: 'power',
          role: 'destructive',
          // Quando o Logout é acionado ele remove o usuário do local storage e redireciona para a página de login
          handler: () => {
            localStorage.removeItem('app.user');
            this.navCtrl.navigateRoot("/login");
          }
        }, {
          // Botão para cancelar
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        }]
    });
    // Aguarda o actionSheet carregar antes de mostrar
    await actionSheet.present();
  }
}

