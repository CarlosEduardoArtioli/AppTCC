import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIconsPage } from './edit-icons.page';

const routes: Routes = [
  {
    path: '',
    component: EditIconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIconsPageRoutingModule { }
