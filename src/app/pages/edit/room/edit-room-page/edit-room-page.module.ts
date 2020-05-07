import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomPagePageRoutingModule } from './edit-room-page-routing.module';

import { EditRoomPagePage } from './edit-room-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditRoomPagePage],
  entryComponents: []
})
export class EditRoomPagePageModule {}
