import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createlisting',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './createlisting.component.html',
  styleUrl: './createlisting.component.css'
})
export class CreatelistingComponent implements OnInit {
  _Router = inject(Router);

  constructor(private apiService: ApiService) {}

  isFormSubmited: boolean = false;
  image1: any = "";
  valueImage1: any = "";
  user: any;
  productOBJ: any; // Removed initialization here

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    const localData: string | null = localStorage.getItem('sellerData');
    if (localData) {
      this.user = JSON.parse(localData);
      this.productOBJ = { 
        sellerId: this.user._id,
        productname: "",
        discription: "",
        catagory: "",
        price: "",
        stock: "",
      };
    }
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files.item(0);
      if (file) {
        this.valueImage1 = file;
        console.log(this.valueImage1);
      }
    }
  }

  darfHandler(productForm: NgForm) {
    // Implementation...
  }

  submitHandler(productForm: NgForm) {
    this.isFormSubmited = true;
    const isFormValid = productForm.form.valid;
    if (isFormValid) {
      this.postData();
      console.log(isFormValid);
    }
  }

  postData() {
    const formData = new FormData();
    Object.keys(this.productOBJ).forEach(key => {
      formData.append(key, this.productOBJ[key]);
    });
    formData.append('image', this.valueImage1);

    this.apiService.post('product/creatproduct', formData).subscribe(data => {
      if (data.message === "productSaved_200") {
        this._Router.navigate(['sellerhome']);
      }
    });
  }
}
