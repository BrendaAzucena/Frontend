import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EPage } from './e.page';

const routes: Routes = [
  {
    path: '',
    component: EPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EPageRoutingModule {}
