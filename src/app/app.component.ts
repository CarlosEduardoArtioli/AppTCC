import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController, AlertController } from '@ionic/angular';

// Importação do Model do usuário
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from './services/user.service';

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
  public user: User = new User('', '', '');

  // Variável showComponent
  showComponent: boolean;
  novoNome: any;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private userService: UserService

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
        this.userService.updateUserName(this.user.name, this.user.email);
      }

      if (this.userService.getUser(this.user.email) == null) {
        this.userService.updateUserName(this.user.name, this.user.email);
      }
      else {
        this.userService.getUserName(this.user.email).valueChanges().subscribe(res => {
          this.user.name = res
          localStorage.setItem('app.user', JSON.stringify(new User(res, this.user.email, this.user.image)));
        });
      }
    });
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
          title: "Editar Dispositivo",
          url: "edit-device-list",
          icon: "create"
        },
        {
          title: "Editar Cômodos",
          url: "edit-room-list",
          icon: "home"
        },
        {
          title: "Adicionar Cômodos",
          url: "add-room-page",
          icon: "add-circle"
        },
        {
          title: "Funções",
          url: "functions",
          icon: "construct"
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

  // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
  async alterarNome() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
    // Header com nome 'Novo Nome'.
      header: 'Novo Nome',
      // Gera inputs
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
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
            // if apenas para saber se o input não está vázio.
            if ((<HTMLInputElement>document.getElementById('newname')).value != "") {
              // this.nome será = ao que está valor do input com Id 'newname'.
              this.novoNome = (<HTMLInputElement>document.getElementById('newname')).value;
              // Substitui o nome anterior "this.user.name" para o novo "this.novoNome".
              localStorage.setItem('app.user', JSON.stringify(new User(this.novoNome, this.user.email, this.user.image)));
              // Puxa a função do ion-toast.
              this.newname();
              this.user = JSON.parse(localStorage.getItem('app.user'));
              // Função para mudar o nome do usuário.
              this.userService.updateUserName(this.user.name, this.user.email)
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
  async newname() {
    const toast = await this.toastController.create({
      header: 'Seu nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}

