import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculoFormPageRoutingModule } from './vehiculo-form-routing.module';

import { VehiculoFormPage } from './vehiculo-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoFormPageRoutingModule
  ],
  declarations: [VehiculoFormPage]
})
export class VehiculoFormPageModule {}
