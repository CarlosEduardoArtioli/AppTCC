import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIconRoomPage } from './edit-icon-room.page';

const routes: Routes = [
  {
    path: '',
    component: EditIconRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIconRoomPageRoutingModule {}
