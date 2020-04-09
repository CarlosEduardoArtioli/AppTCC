import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard] },
  {
    path: 'adicionar',
    loadChildren: () => import('./pages/adicionar/adicionar.module').then( m => m.AdicionarPageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'edit-device-list',
    loadChildren: () => import('./pages/edit/edit-device-list/edit-device-list.module').then( m => m.EditDeviceListPageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'edit-device-page/:id',
    loadChildren: () => import('./pages/edit/edit-device-page/edit-device-page.module').then( m => m.EditDevicePagePageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'modal-icon-device',
    loadChildren: () => import('./pages/edit/modal-icon-device/modal-icon-device.module').then( m => m.ModalIconDevicePageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }