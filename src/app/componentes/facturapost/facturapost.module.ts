import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturapostPageRoutingModule } from './facturapost-routing.module';

import { FacturapostPage } from './facturapost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturapostPageRoutingModule
  ],
  declarations: [FacturapostPage]
})
export class FacturapostPageModule {}
