import { Component } from '@angular/core';
import { ListedproductComponent } from './listedproduct/listedproduct.component';
import { CreatelistingComponent } from './createlisting/createlisting.component';
import {  MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-productlistingpage',
  standalone: true,
  imports: [ListedproductComponent,CreatelistingComponent,MatIconModule,RouterLink,NgClass],
  templateUrl: './productlistingpage.component.html',
  styleUrl: './productlistingpage.component.css'
})
export class ProductlistingpageComponent {
  listingButton:boolean = false;

  trigerListing(){
    this.listingButton = true
  }
  ProductHandler(){
    this.listingButton = false
  }
}
