import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionsPage } from './functions.page';

const routes: Routes = [
  {
    path: '',
    component: FunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionsPageRoutingModule {}
