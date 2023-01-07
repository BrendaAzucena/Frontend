import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EPageRoutingModule } from './e-routing.module';

import { EPage } from './e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EPageRoutingModule
  ],
  declarations: [EPage]
})
export class EPageModule {}
