import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTimerPagePageRoutingModule } from './edit-timer-page-routing.module';

import { EditTimerPagePage } from './edit-timer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    EditTimerPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditTimerPagePage]
})
export class EditTimerPagePageModule { }
