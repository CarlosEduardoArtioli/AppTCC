import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaEditarPage } from './escolha-editar.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaEditarPageRoutingModule {}
