import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  irAtras(){
    this.route.navigate(['/menu-principal']);
  }
}
