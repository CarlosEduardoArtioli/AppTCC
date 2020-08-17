import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTimerListPageRoutingModule } from './edit-timer-list-routing.module';

import { EditTimerListPage } from './edit-timer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTimerListPageRoutingModule
  ],
  declarations: [EditTimerListPage]
})
export class EditTimerListPageModule {}
