import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRoomPagePageRoutingModule } from './add-room-page-routing.module';

import { AddRoomPagePage } from './add-room-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRoomPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRoomPagePage]
})
export class AddRoomPagePageModule {}
