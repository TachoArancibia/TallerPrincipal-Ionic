import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculoPicsPage } from './vehiculo-pics.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculoPicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoPicsPageRoutingModule {}
