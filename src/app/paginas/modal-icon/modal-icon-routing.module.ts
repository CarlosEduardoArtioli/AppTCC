import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIconPage } from './modal-icon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIconPageRoutingModule {}
