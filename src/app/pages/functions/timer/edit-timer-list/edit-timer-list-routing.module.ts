import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTimerListPage } from './edit-timer-list.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTimerListPageRoutingModule {}
