import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentapostPage } from './ventapost.page';

const routes: Routes = [
  {
    path: '',
    component: VentapostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentapostPageRoutingModule {}
