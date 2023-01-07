import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FadIdPage } from './fad-id.page';

const routes: Routes = [
  {
    path: '',
    component: FadIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FadIdPageRoutingModule {}
