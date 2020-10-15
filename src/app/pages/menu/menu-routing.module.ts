import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-room-list',
        loadChildren: () => import('../edit/room/edit-room-list/edit-room-list.module').then(m => m.EditRoomListPageModule),
        canActivate: [AuthGuard]
      },
      // Rota 'edit-device-list'
      {
        path: 'edit-device-list',
        loadChildren: () => import('../edit/device/edit-device-list/edit-device-list.module').then(m => m.EditDeviceListPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'device-list',
        loadChildren: () => import('../functions/timer/device-list/device-list.module').then(m => m.DeviceListPageModule),
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
