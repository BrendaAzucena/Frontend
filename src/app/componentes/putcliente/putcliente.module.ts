import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutclientePageRoutingModule } from './putcliente-routing.module';

import { PutclientePage } from './putcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutclientePageRoutingModule
  ],
  declarations: [PutclientePage]
})
export class PutclientePageModule {}
