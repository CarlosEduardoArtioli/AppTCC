import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NavController, ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // Variável user
  public user: User = new User('', '', '');

  // Variável showComponent
  showComponent: boolean;
  novoNome: any;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Editar',
      open: false,
      children: [
        {
          title: 'Dispositivo',
          url: '/menu/edit-device-list',
          icon: 'hardware-chip'
        },
        {
          title: 'Cômodo',
          url: '/menu/edit-room-list',
          icon: 'home'
        }
      ]
    },
    {
      title: 'Funções',
      url: '/menu/functions',
      icon: 'build'
    },
  ];
  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userName();

    this.user = JSON.parse(localStorage.getItem('app.user'));
  }
  userName() {

    this.user = JSON.parse(localStorage.getItem('app.user'));

    if (this.user.name === '') {
      localStorage.setItem('app.user', JSON.stringify(new User(this.user.email, this.user.email, 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')));
      this.user = JSON.parse(localStorage.getItem('app.user'));
      this.userService.updateUserName(this.user.name, this.user.email);
    } else {
      this.userService.getUserName(this.user.email).valueChanges().subscribe(res => {
        this.user.name = res;
        localStorage.setItem('app.user', JSON.stringify(new User(this.user.name, this.user.email, this.user.image)));
      });
      this.user = JSON.parse(localStorage.getItem('app.user'));
    }
    this.user = JSON.parse(localStorage.getItem('app.user'));
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
            this.navCtrl.navigateRoot('/login');
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
            if ((document.getElementById('newname') as HTMLInputElement).value != '') {
              // this.nome será = ao que está valor do input com Id 'newname'.
              this.novoNome = ( document.getElementById('newname') as HTMLInputElement).value;
              // Substitui o nome anterior "this.user.name" para o novo "this.novoNome".
              this.user = JSON.parse(localStorage.getItem('app.user'));
              localStorage.setItem('app.user', JSON.stringify(new User(this.novoNome, this.user.email, 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')));
              // Puxa a função do ion-toast.
              this.newname();
              this.user = JSON.parse(localStorage.getItem('app.user'));
              // Função para mudar o nome do usuário.
              this.userService.updateUserName(this.user.name, this.user.email);
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