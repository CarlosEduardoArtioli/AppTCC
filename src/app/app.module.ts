// Aqui é onde são declarados "Bibliotecas" que vão ser usadas no app 
// Mas não são todas

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//  firebase imports, remove what you don't require
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// environment
import { environment } from '../environments/environment';


import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

export interface ImagePickerOptions {
  maximumImagesCount?: number;
  width?: number;
  height?: number;
  quality?: number;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Keyboard,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    File
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }