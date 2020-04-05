import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'adicionar',
    loadChildren: () => import('./paginas/adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./paginas/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'escolha-editar',
    loadChildren: () => import('./paginas/escolha-editar/escolha-editar.module').then( m => m.EscolhaEditarPageModule)
  },
  {
    path: 'modal-icon',
    loadChildren: () => import('./paginas/modal-icon/modal-icon.module').then( m => m.ModalIconPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }