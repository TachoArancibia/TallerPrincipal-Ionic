import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculoPicsPageRoutingModule } from './vehiculo-pics-routing.module';

import { VehiculoPicsPage } from './vehiculo-pics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoPicsPageRoutingModule
  ],
  declarations: [VehiculoPicsPage]
})
export class VehiculoPicsPageModule {}
