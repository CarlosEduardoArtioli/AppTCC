import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomsPageRoutingModule } from './edit-rooms-routing.module';

import { EditRoomsPage } from './edit-rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomsPageRoutingModule
  ],
  declarations: [EditRoomsPage]
})
export class EditRoomsPageModule { }
