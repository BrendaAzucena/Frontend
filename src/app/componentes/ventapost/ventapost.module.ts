import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentapostPageRoutingModule } from './ventapost-routing.module';

import { VentapostPage } from './ventapost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentapostPageRoutingModule
  ],
  declarations: [VentapostPage]
})
export class VentapostPageModule {}
