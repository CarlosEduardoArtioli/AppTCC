import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRoomListPage } from './edit-room-list.page';

const routes: Routes = [
  {
    path: '',
    component: EditRoomListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRoomListPageRoutingModule { }
