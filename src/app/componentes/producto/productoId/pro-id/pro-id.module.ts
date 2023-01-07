import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProIdPageRoutingModule } from './pro-id-routing.module';

import { ProIdPage } from './pro-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProIdPageRoutingModule
  ],
  declarations: [ProIdPage]
})
export class ProIdPageModule {}
