import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentIdPageRoutingModule } from './vent-id-routing.module';

import { VentIdPage } from './vent-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentIdPageRoutingModule
  ],
  declarations: [VentIdPage]
})
export class VentIdPageModule {}
