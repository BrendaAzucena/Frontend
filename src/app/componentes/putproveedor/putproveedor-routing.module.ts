import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutproveedorPage } from './putproveedor.page';

const routes: Routes = [
  {
    path: '',
    component: PutproveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutproveedorPageRoutingModule {}
