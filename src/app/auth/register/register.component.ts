import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isFormSubmited: boolean = false;
  registerOBJ:any ={
    role: "",
    name:"",
    email:"",
    password:"",
    mobile:""
  }
  submitHandler(registerForm:NgForm){
    this.isFormSubmited = true
    const isFormValid = registerForm.form.valid;
    if (isFormValid) {
    
      console.log(this.registerOBJ);
    }
  }
}
