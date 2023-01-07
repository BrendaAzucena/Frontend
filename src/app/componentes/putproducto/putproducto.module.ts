import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutproductoPageRoutingModule } from './putproducto-routing.module';

import { PutproductoPage } from './putproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutproductoPageRoutingModule
  ],
  declarations: [PutproductoPage]
})
export class PutproductoPageModule {}
