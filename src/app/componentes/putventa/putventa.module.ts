import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutventaPageRoutingModule } from './putventa-routing.module';

import { PutventaPage } from './putventa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutventaPageRoutingModule
  ],
  declarations: [PutventaPage]
})
export class PutventaPageModule {}
