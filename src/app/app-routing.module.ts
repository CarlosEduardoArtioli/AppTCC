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
    path: 'register',
    loadChildren: () => import('./paginas/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'edit-device-list',
    loadChildren: () => import('./paginas/edit/edit-device-list/edit-device-list.module').then( m => m.EditDeviceListPageModule)
  },
  {
    path: 'edit-device-page/:id',
    loadChildren: () => import('./paginas/edit/edit-device-page/edit-device-page.module').then( m => m.EditDevicePagePageModule)
  },
  {
    path: 'modal-icon-device',
    loadChildren: () => import('./paginas/edit/modal-icon-device/modal-icon-device.module').then( m => m.ModalIconDevicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }