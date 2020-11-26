import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  irIngresarOrden(){
    this.route.navigate(['/home']);
  }

  cerrarSesion(){
    this.route.navigate(['/rut-login'])
  }

  irPendientes(){
    this.route.navigate(['/pendientes'])
  }
}
