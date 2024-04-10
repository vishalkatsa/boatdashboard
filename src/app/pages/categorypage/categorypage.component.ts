import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TotalcategoryComponent } from './totalcategory/totalcategory.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';

@Component({
  selector: 'app-categorypage',
  standalone: true,
  imports: [NgClass,TotalcategoryComponent,CreatecategoryComponent],
  templateUrl: './categorypage.component.html',
  styleUrl: './categorypage.component.css'
})
export class CategorypageComponent {
  CategoryButton: boolean = false;

  trigerCategory() {
    this.CategoryButton = true
  }
  CategoryHandler() {
    this.CategoryButton = false
  }
}
