import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDeviceListPage } from './edit-device-list.page';

const routes: Routes = [
  {
    path: '',
    component: EditDeviceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDeviceListPageRoutingModule {}
