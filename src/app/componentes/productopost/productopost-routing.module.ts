import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductopostPage } from './productopost.page';

const routes: Routes = [
  {
    path: '',
    component: ProductopostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductopostPageRoutingModule {}
