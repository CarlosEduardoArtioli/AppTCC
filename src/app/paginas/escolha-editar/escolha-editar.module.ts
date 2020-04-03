import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscolhaEditarPageRoutingModule } from './escolha-editar-routing.module';

import { EscolhaEditarPage } from './escolha-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaEditarPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: EscolhaEditarPage
      }
    ])
  ],
  declarations: [EscolhaEditarPage]
})
export class EscolhaEditarPageModule {}
