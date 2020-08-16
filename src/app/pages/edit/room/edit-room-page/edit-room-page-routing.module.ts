import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRoomPagePage } from './edit-room-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditRoomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRoomPagePageRoutingModule {}
