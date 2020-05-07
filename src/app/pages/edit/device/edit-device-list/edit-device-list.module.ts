import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDeviceListPageRoutingModule } from './edit-device-list-routing.module';

import { EditDeviceListPage } from './edit-device-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDeviceListPageRoutingModule
  ],
  declarations: [EditDeviceListPage]
})
export class EditDeviceListPageModule {}
