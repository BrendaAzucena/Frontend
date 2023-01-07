import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductopostPageRoutingModule } from './productopost-routing.module';

import { ProductopostPage } from './productopost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductopostPageRoutingModule
  ],
  declarations: [ProductopostPage]
})
export class ProductopostPageModule {}
