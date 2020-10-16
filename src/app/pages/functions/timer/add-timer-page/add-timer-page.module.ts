import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTimerPagePageRoutingModule } from './add-timer-page-routing.module';

import { AddTimerPagePage } from './add-timer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    AddTimerPagePageRoutingModule
  ],
  declarations: [AddTimerPagePage]
})
export class AddTimerPagePageModule {}
