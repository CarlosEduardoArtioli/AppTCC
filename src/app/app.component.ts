import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController, AlertController } from '@ionic/angular';

// Importação do Model do usuário
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { app } from 'firebase';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

export interface ImagePickerOptions {
  maximumImagesCount?: number;
  width?: number;
  height?: number;
  quality?: number;
}


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
  image: any;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private alerCtrl: AlertController,
    private imagePicker: ImagePicker,
    private file:File

  ) {
    router.events.forEach((event) => {
      if (this.router.url === '/login') {
        this.showComponent = false
      }
      else {
        if (this.router.url === '/signup') {
          this.showComponent = false
        }
        else {
          this.showComponent = true;
          this.initializeApp();
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

PickAImage() {
var options: ImagePickerOptions={
  maximumImagesCount: 1,
  width: 100,
  height: 100
}
  this.imagePicker.getPictures(options).then((results) => {
    for(var interval = 0;interval<results.length;interval++)
    {
      let filename = results[interval].substring(results[interval]
        .lastIndexOf('/')+1)
        let path = results[interval].substring(0,results[interval].lastIndexOf
          ('/')+1)
        this.file.readAsDataURL(path,filename).then((base64string)=>{
          this.image.push(base64string);
        })
    }
  })
}

 async alterarNome() {

    const alert = await this.alerCtrl.create({

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
          text: 'Cancel',
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
           localStorage.setItem('app.user', JSON.stringify(new User(this.novoNome, this.user.email, 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')));
            this.newname();
            window.location.reload(true);
            }
          }
        }
      ]
    });
    await alert.present();
  }

 async newname() {
    const alert = await this.alerCtrl.create({
      header: 'Seu nome foi alterado',
    });
      await alert.present();
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
            this.PickAImage();
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

