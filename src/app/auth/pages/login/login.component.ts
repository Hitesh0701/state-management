import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formSubmitted: boolean = false;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(){
    this.formSubmitted = true;
    if(this.loginForm.valid){
      console.log("Login User Info", this.loginForm.value);
      this.loginForm.reset();
      this.formSubmitted = false;
    }
  }
}
