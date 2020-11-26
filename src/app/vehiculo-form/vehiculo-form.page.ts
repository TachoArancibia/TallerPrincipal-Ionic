import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.page.html',
  styleUrls: ['./vehiculo-form.page.scss'],
})
export class VehiculoFormPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  irAtras(){
    this.route.navigate(['/home']);
  }

  irSiguiente(){
    this.route.navigate(['/vehiculo-pics']);
  }
}
