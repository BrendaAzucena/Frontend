import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutproveedorPageRoutingModule } from './putproveedor-routing.module';

import { PutproveedorPage } from './putproveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutproveedorPageRoutingModule
  ],
  declarations: [PutproveedorPage]
})
export class PutproveedorPageModule {}
