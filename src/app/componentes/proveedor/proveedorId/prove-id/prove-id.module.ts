import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveIdPageRoutingModule } from './prove-id-routing.module';

import { ProveIdPage } from './prove-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveIdPageRoutingModule
  ],
  declarations: [ProveIdPage]
})
export class ProveIdPageModule {}
