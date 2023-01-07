import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorpostPage } from './proveedorpost.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorpostPageRoutingModule {}
