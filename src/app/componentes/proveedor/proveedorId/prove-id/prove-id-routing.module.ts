import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveIdPage } from './prove-id.page';

const routes: Routes = [
  {
    path: '',
    component: ProveIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveIdPageRoutingModule {}
