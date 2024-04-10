import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/http.service';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-sellerlogin',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './sellerlogin.component.html',
  styleUrl: './sellerlogin.component.css'
})
export class SellerloginComponent {
  _Router = inject(Router)

  constructor(private apiService: ApiService) { }
  isFormSubmit: boolean = false;

  loginOBJ: any = {
    email: '',
    password: '',
  }
  loginHandler(loginFrom: NgForm) {
    this.isFormSubmit = true;
    const isFromVAlid = loginFrom.form.valid;
    if (isFromVAlid) {
      // alert("ok_200" + JSON.stringify(this.loginOBJ))
      this.loginPostHandler()
    } else {
      alert("not_ok 500")
    }
  }
  loginPostHandler() {
    const loginData = this.loginOBJ
    this.apiService.post('auth_seller/loginuthorizeuser', loginData).subscribe(data => {
      const message = data?.message;
      const token = data?.token;
      const userDatamy = data?.userData;
      const userData = JSON.stringify(userDatamy);
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('sellerData', userData)
      }
      if (message === "loginSucces_200") {
        setTimeout(() => {
          this._Router.navigate(['sellerhome'])
        }, 2000);
      }

      console.log(message)
    })
  }
}
