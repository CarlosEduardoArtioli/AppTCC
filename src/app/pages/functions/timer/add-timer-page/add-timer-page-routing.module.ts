import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTimerPagePage } from './add-timer-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddTimerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTimerPagePageRoutingModule {}
