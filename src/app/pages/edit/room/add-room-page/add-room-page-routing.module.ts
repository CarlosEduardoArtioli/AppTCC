import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRoomPagePage } from './add-room-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddRoomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoomPagePageRoutingModule {}
