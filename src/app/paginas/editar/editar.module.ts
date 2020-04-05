import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPageRoutingModule } from './editar-routing.module';

import { EditarPage } from './editar.page';
import { ModalIconPage } from '../modal-icon/modal-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarPage, ModalIconPage],
  entryComponents: [ModalIconPage]
})
export class EditarPageModule {}
