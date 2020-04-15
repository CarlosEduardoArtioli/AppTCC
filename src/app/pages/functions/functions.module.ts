import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunctionsPageRoutingModule } from './functions-routing.module';

import { FunctionsPage } from './functions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunctionsPageRoutingModule
  ],
  declarations: [FunctionsPage]
})
export class FunctionsPageModule {}
