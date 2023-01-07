import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutclientePage } from './putcliente.page';

const routes: Routes = [
  {
    path: '',
    component: PutclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutclientePageRoutingModule {}
