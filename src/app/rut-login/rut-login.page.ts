import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

declare var require:any;
const { validate, clean, format } = require('rut.js');

@Component({
  selector: 'app-rut-login',
  templateUrl: './rut-login.page.html',
  styleUrls: ['./rut-login.page.scss'],
})
export class RutLoginPage implements OnInit {
  
  
  ingresoRut_var : String;

  constructor(private route : Router, public toastController: ToastController) { 

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Rut incorrecto.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  ingresarSesion(){
    validate(this.ingresoRut_var)?
      this.route.navigate(['/menu-principal']):
      this.presentToast();
  }
}
