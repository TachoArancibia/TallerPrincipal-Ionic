import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutLoginPageRoutingModule } from './rut-login-routing.module';

import { RutLoginPage } from './rut-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutLoginPageRoutingModule
  ],
  declarations: [RutLoginPage]
})
export class RutLoginPageModule {}
