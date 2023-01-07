import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutfacturaPageRoutingModule } from './putfactura-routing.module';

import { PutfacturaPage } from './putfactura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutfacturaPageRoutingModule
  ],
  declarations: [PutfacturaPage]
})
export class PutfacturaPageModule {}
