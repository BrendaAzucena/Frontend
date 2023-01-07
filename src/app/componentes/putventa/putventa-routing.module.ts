import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutventaPage } from './putventa.page';

const routes: Routes = [
  {
    path: '',
    component: PutventaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutventaPageRoutingModule {}
