import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formSubmitted: boolean = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.signupForm.valid){
      console.log('New User Info', this.signupForm.value);
      // route to login after user added
      this.router.navigate(['/auth/login']);
    }
  }

}
