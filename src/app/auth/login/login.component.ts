import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/http.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

      _Router = inject(Router)

      constructor(private apiService:ApiService){}
      isFormSubmit:boolean = false;

      loginOBJ:any = {
        email:'',
        password:'',
      }
      loginHandler(loginFrom:NgForm){
        this.isFormSubmit = true;
        const isFromVAlid = loginFrom.form.valid;
        if (isFromVAlid) {
          // alert("ok_200" + JSON.stringify(this.loginOBJ))
          this.loginPostHandler()
        }else{
          alert("not_ok 500")
        }
      }
      loginPostHandler(){
        const loginData = this.loginOBJ
        this.apiService.post('auth_user/loginuthorizeuser',{loginData}).subscribe(data=>{
          const message = data?.message;
          const token = data?.token;
          if (token) {
            localStorage.setItem('token',token)
          }
          if (message === "loginSucces_200") {
            setTimeout(() => {
              this._Router.navigate(['home'])
            }, 2000);
          }

          console.log(message)
        })
      }
}
