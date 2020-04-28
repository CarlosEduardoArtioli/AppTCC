import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController, AlertController } from '@ionic/angular';

// Importação do Model do usuário
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { firebase } from '@firebase/app';
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
  image: any=[];
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
    public imagePicker: ImagePicker,
    public file: File,
    private camera: Camera

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

// ========================================================================================

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

// ========================================================================================
    
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
    const alert = await this.alertCtrl.create({
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

  private upload() {
    return new Promise<void>(async (resolve, reject) => {
        const filePicker = document.querySelector('input');

        if (!filePicker || !filePicker.files 
            || filePicker.files.length <= 0) {
            reject('No file selected.');
            return;
        }
        const myFile = filePicker.files[0];

        try {        
          const storagePathAndFilename =
             `myFolder/mySubfolders/${myFile.name}`

          const ref = 
             firebase.storage().ref(storagePathAndFilename);

          await ref.put(myFile);

          const myDownloadUrl = await ref.getDownloadURL();

          console.log(`Your image url is ${myDownloadUrl}`);
          
          resolve();
        } catch (err) {
          reject(err);
        }
    }); 
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

