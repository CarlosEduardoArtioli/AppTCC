import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Importação da classe AuthGuard
import { AuthGuard } from './guards/auth.guard';

 // Rotas do App
const routes: Routes = [
  // Caso a rota seja nula o app redireciona para a página 'login' 
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rota 'home'
  // Em certas rotas é passado o canActive para se o usuário não estiver logado o redirecionar para a página de login
  // Assim evitando que o usuário entre no em certas páginas sem o login
  { path: 'home', 
  loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), 
  canActivate: [AuthGuard] 
  },
  // Rota 'adicionar'
  {
    path: 'adicionar',
    loadChildren: () => import('./pages/adicionar/adicionar.module').then( m => m.AdicionarPageModule), 
    canActivate: [AuthGuard] 
  },
  // Rota 'edit-device-list'
  {
    path: 'edit-device-list',
    loadChildren: () => import('./pages/edit/device/edit-device-list/edit-device-list.module').then( m => m.EditDeviceListPageModule), 
    canActivate: [AuthGuard] 
  },
  // Rota 'edit-device-page/:id'
  // Essa rota recebe o id passado em seu page.ts para redirecinar o usuário para a página de edição de certo dispositivo
  {
    path: 'edit-device-page/:mac',
    loadChildren: () => import('./pages/edit/device/edit-device-page/edit-device-page.module').then( m => m.EditDevicePagePageModule), 
    canActivate: [AuthGuard] 
  },
  // Rota 'login'
  // Essa rota não recebe o canActive para que mesmo sem login ela seja acessivel
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  // Rota 'signup'
  // Essa rota não recebe o canActive para que mesmo sem login ela seja acessivel
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'functions',
    loadChildren: () => import('./pages/functions/functions.module').then( m => m.FunctionsPageModule), 
    canActivate: [AuthGuard] 
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/functions/timer/timer.module').then( m => m.TimerPageModule), 
    canActivate: [AuthGuard] 
  },
  {
    path: 'edit-room-list',
    loadChildren: () => import('./pages/edit/room/edit-room-list/edit-room-list.module').then( m => m.EditRoomListPageModule), 
    canActivate: [AuthGuard] 
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./pages/edit/edit-page/edit-page.module').then( m => m.EditPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'timer-add',
    loadChildren: () => import('./pages/functions/timer/timer-add/timer-add.module').then( m => m.TimerAddPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-timer-page/:mac',
    loadChildren: () => import('./pages/functions/timer/edit-timer/edit-timer-page.module').then( m => m.EditDevicePagePageModule),
    canActivate: [AuthGuard]
  },
  
  // Rota "home"  em casos especiais
// Esta rota leva até a home caso o usuario esteja logado e digite 
// alguma rota que não exista. Por exemplo beaver-house.web.app/abc123  
{
  path: '**',
  redirectTo: 'home', 
  canActivate: [AuthGuard] 
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }