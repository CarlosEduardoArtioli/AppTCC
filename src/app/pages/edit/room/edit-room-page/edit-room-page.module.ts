import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomPagePageRoutingModule } from './edit-room-page-routing.module';

import { EditRoomPagePage } from './edit-room-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomPagePageRoutingModule
  ],
  declarations: [EditRoomPagePage]
})
export class EditRoomPagePageModule {}
