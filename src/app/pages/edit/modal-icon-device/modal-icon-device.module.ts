import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIconDevicePageRoutingModule } from './modal-icon-device-routing.module';

import { ModalIconDevicePage } from './modal-icon-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIconDevicePageRoutingModule
  ],
  declarations: [ModalIconDevicePage],
  exports: [ModalIconDevicePage]
})
export class ModalIconDevicePageModule {}
