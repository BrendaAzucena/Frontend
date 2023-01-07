import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutfacturaPage } from './putfactura.page';

const routes: Routes = [
  {
    path: '',
    component: PutfacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutfacturaPageRoutingModule {}
