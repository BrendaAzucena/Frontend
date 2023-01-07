import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaPage } from './factura.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaPage
  },
  {
    path: 'fad-id',
    loadChildren: () => import('./facturaId/fad-id/fad-id.module').then( m => m.FadIdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturaPageRoutingModule {}
