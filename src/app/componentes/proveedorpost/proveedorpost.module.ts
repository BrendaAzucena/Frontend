import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorpostPageRoutingModule } from './proveedorpost-routing.module';

import { ProveedorpostPage } from './proveedorpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorpostPageRoutingModule
  ],
  declarations: [ProveedorpostPage]
})
export class ProveedorpostPageModule {}
