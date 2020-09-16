import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIconsPageRoutingModule } from './edit-icons-routing.module';

import { EditIconsPage } from './edit-icons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIconsPageRoutingModule
  ],
  declarations: [EditIconsPage]
})
export class EditIconsPageModule { }
