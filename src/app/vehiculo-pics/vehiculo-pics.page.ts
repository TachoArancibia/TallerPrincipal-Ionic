import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-vehiculo-pics',
  templateUrl: './vehiculo-pics.page.html',
  styleUrls: ['./vehiculo-pics.page.scss'],
})
export class VehiculoPicsPage implements OnInit {

  constructor(private route : Router,public photoService: PhotoService) { }

  ngOnInit() {
  }

  irAtras(){
    this.route.navigate(['/vehiculo-form']);
  }

  irSiguiente(){
    this.route.navigate(['/menu-principal'])
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
