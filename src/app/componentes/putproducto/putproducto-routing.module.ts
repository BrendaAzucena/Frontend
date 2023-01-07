import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutproductoPage } from './putproducto.page';

const routes: Routes = [
  {
    path: '',
    component: PutproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutproductoPageRoutingModule {}
