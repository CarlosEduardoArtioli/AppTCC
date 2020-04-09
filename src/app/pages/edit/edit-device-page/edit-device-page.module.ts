import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDevicePagePageRoutingModule } from './edit-device-page-routing.module';

import { EditDevicePagePage } from './edit-device-page.page';

import { ModalIconDevicePage } from '../modal-icon-device/modal-icon-device.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    EditDevicePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditDevicePagePage],
  entryComponents: [ModalIconDevicePage]
})
export class EditDevicePagePageModule {}
