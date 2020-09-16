import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomListPageRoutingModule } from './edit-room-list-routing.module';

import { EditRoomListPage } from './edit-room-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomListPageRoutingModule
  ],
  declarations: [EditRoomListPage]
})
export class EditRoomListPageModule { }
