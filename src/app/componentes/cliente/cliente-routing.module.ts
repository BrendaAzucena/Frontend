import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage
  },
  {
    path: 'a/:Id',
    loadChildren: () => import('../a/a.module').then( m => m.APageModule)
  },
  {
    path: 'e/:Id',
    loadChildren: () => import('../e/e.module').then( m => m.EPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
