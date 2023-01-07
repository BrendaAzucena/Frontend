import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProIdPage } from './pro-id.page';

const routes: Routes = [
  {
    path: '',
    component: ProIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProIdPageRoutingModule {}
