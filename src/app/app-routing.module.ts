import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Importação da classe AuthGuard
import { AuthGuard } from './guards/auth.guard';

// Rotas do App
const routes: Routes = [
  // Caso a rota seja nula o app redireciona para a página 'login'
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Em certas rotas é passado o canActive para se o usuário não estiver logado o redirecionar para a página de login
  // Assim evitando que o usuário entre no em certas páginas sem o login
  // Rota 'adicionar'
  {
    path: 'adicionar',
    loadChildren: () => import('./pages/adicionar/adicionar.module').then(m => m.AdicionarPageModule),
    canActivate: [AuthGuard]
  },
  // Rota 'edit-device-page/:id'
  // Essa rota recebe o id passado em seu page.ts para redirecinar o usuário para a página de edição de certo dispositivo
  {
    path: 'edit-device-page/:mac',
    loadChildren: () => import('./pages/edit/device/edit-device-page/edit-device-page.module').then(m => m.EditDevicePagePageModule),
    canActivate: [AuthGuard]
  },
  // Rota 'login'
  // Essa rota não recebe o canActive para que mesmo sem login ela seja acessivel
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/auth/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  // Rota 'signup'
  // Essa rota não recebe o canActive para que mesmo sem login ela seja acessivel
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'edit-timer-page/:mac',
    loadChildren: () => import('./pages/functions/timer/edit-timer/edit-timer-page.module').then(m => m.EditDevicePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-icons/:mac',
    loadChildren: () => import('./pages/edit/device/edit-icons/edit-icons.module').then(m => m.EditIconsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-rooms/:mac',
    loadChildren: () => import('./pages/edit/device/edit-rooms/edit-rooms.module').then(m => m.EditRoomsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-icon-room/:room',
    loadChildren: () => import('./pages/edit/room/edit-icon-room/edit-icon-room.module').then(m => m.EditIconRoomPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-room-page/:room',
    loadChildren: () => import('./pages/edit/room/edit-room-page/edit-room-page.module').then(m => m.EditRoomPagePageModule),
    canActivate: [AuthGuard]
  },
  // Rota "home"  em casos especiais
  // Esta rota leva até a home caso o usuario esteja logado e digite
  // alguma rota que não exista. Por exemplo beaver-house.web.app/abc123
  {
    path: '**',
    redirectTo: 'menu/home',
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
