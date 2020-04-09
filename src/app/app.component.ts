import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController } from '@ionic/angular';
import { User } from './models/user.model';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: { title: string; url: string; icon: string; }[];
  public user: User = new User('', '', 'https://placehold.it/80');
  showComponent: boolean;
  
  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private router:Router
  ) {
    router.events.forEach((event) => {
      if (this.router.url === '/login') {
        this.showComponent = false
        }
        else{
          if (this.router.url === '/signup') {
            this.showComponent = false
            }
            else{
              this.showComponent = true;
              this.initializeApp();
            }
        }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sideMenu();
      this.user = JSON.parse(localStorage.getItem('baltagram.user'));
    });
  }

  sideMenu() {
    this.navigate =
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

  async showOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opções',
      buttons: [{
        text: 'Logout',
        role: 'destructive',
        icon: 'power',
        handler: () => {
          localStorage.removeItem('baltagra.user');
          this.navCtrl.navigateRoot("/login");
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }
}
