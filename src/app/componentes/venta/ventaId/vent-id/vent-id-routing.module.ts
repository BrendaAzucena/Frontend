import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentIdPage } from './vent-id.page';

const routes: Routes = [
  {
    path: '',
    component: VentIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentIdPageRoutingModule {}
