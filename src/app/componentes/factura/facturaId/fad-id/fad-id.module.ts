import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FadIdPageRoutingModule } from './fad-id-routing.module';

import { FadIdPage } from './fad-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FadIdPageRoutingModule
  ],
  declarations: [FadIdPage]
})
export class FadIdPageModule {}
