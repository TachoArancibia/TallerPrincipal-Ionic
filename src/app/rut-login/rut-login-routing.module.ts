import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutLoginPage } from './rut-login.page';

const routes: Routes = [
  {
    path: '',
    component: RutLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutLoginPageRoutingModule {}
