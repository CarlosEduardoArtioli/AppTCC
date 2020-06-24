import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerAddPageRoutingModule } from './timer-add-routing.module';

import { TimerAddPage } from './timer-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerAddPageRoutingModule
  ],
  declarations: [TimerAddPage]
})
export class TimerAddPageModule {}
