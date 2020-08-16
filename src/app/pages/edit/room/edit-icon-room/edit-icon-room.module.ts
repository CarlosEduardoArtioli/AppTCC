import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIconRoomPageRoutingModule } from './edit-icon-room-routing.module';

import { EditIconRoomPage } from './edit-icon-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIconRoomPageRoutingModule
  ],
  declarations: [EditIconRoomPage]
})
export class EditIconRoomPageModule {}
