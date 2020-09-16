import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTimerPagePage } from './edit-timer-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTimerPagePageRoutingModule { }
