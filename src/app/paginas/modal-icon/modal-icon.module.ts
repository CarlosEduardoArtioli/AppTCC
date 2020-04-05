import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIconPageRoutingModule } from './modal-icon-routing.module';

import { ModalIconPage } from './modal-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIconPageRoutingModule
  ],
  declarations: [ModalIconPage],
  exports: [ModalIconPage]
})
export class ModalIconPageModule {}
