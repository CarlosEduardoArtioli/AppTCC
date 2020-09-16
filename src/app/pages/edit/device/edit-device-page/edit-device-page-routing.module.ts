import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDevicePagePage } from './edit-device-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditDevicePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDevicePagePageRoutingModule { }
