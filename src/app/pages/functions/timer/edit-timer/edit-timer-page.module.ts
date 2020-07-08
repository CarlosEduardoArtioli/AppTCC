import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDevicePagePageRoutingModule } from './edit-timer-page-routing.module';

import { EditDevicePagePage } from './edit-timer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDevicePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditDevicePagePage],
  entryComponents: []
})
export class EditDevicePagePageModule {}
