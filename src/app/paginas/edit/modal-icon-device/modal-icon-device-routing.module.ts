import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIconDevicePage } from './modal-icon-device.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIconDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIconDevicePageRoutingModule {}
