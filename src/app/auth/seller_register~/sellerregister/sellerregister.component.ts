import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ApiService } from '../../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerregister',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, NgIf],
  templateUrl: './sellerregister.component.html',
  styleUrl: './sellerregister.component.css'
})
export class SellerregisterComponent {

  constructor(private apiService: ApiService) {
    ;
  }
  _Router = inject(Router);

  firstHide: Boolean = false;
  FinalHide: Boolean = false;

  registerOBJ: any = {
    mobile: "",
    email: "",
    gstnumber: "",
    password: "",
    conformpassword: "",
    name:"",
    shop_or_company: ""
  }
  RegisterAndContinue(FirstRegister: NgForm) {

    const isFormValid = FirstRegister.form.valid;
    console.log(isFormValid);
    if (isFormValid) {
      this.firstHide = true;
      console.log(this.registerOBJ);

    }
  }
  Continuenext(FirstRegister2: NgForm) {
    const isFormValid = FirstRegister2.form.valid;
    console.log("next", isFormValid);
    if (isFormValid) {
      this.FinalHide = true;
      console.log("next", this.registerOBJ);

    }
  }
  FinalSubmit(FirstRegister3: NgForm) {
    const isFormValid = FirstRegister3.form.valid;
    console.log("next", isFormValid);
    if (isFormValid) {
      try {
        this.FinalHide = true;
        console.log("next", this.registerOBJ);
        this.apiService.post('auth_seller/createauthorizeuser', this.registerOBJ).subscribe(data => {
          if (data.message === "SavedSellerAuth_200") {
            this._Router.navigate(['sellerlogin'])
          }
        });
      } catch (error) {
        console.log(error);
        
      }

    }
  }
  back1() {
    this.firstHide = false
  }
  back2() {
    this.FinalHide = false;
    this.firstHide = true
  }
}
