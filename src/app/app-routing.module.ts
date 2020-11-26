import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'rut-login',
    pathMatch: 'full'
  },
  {
    path: 'vehiculo-form',
    loadChildren: () => import('./vehiculo-form/vehiculo-form.module').then( m => m.VehiculoFormPageModule)
  },
  {
    path: 'rut-login',
    loadChildren: () => import('./rut-login/rut-login.module').then( m => m.RutLoginPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'vehiculo-pics',
    loadChildren: () => import('./vehiculo-pics/vehiculo-pics.module').then( m => m.VehiculoPicsPageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
