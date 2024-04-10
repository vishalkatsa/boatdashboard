import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../../service/http.service';

@Component({
  selector: 'app-createcategory',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './createcategory.component.html',
  styleUrl: './createcategory.component.css'
})
export class CreatecategoryComponent {
  constructor(private apiService: ApiService) { }
  isFormSubmited: boolean = false;

  productOBJ: any = {
    productname: "",
    discription: "",
    catagory: "",
    price: "",
    stock: ""

  }

  ngOnInit(): void {
    // this.postData()
  }

  darfHandler(productForm: NgForm) {
    // this.isFormSubmited = true;
    // const isFormValid = productForm.form.valid;
    // if (isFormValid) {
    //   console.log(this.productOBJ);
    // }
  }
  // Create main Category  
  maincategory: any = ""
  submitHandler(productForm: NgForm) {
    this.isFormSubmited = true
    const isFormValid = productForm.form.valid;
    if (isFormValid) {
      this.postData()
      console.log(this.productOBJ);
    }
  }
  // Listed Catagory


  postData() {
    const postData = this.productOBJ;
    this.apiService.post('product/creatproduct', postData).subscribe(data => {
      if (data.message === "productSaved_200") {

      }
    });
  }

}
