import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;  
  error =null;

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(AuthForm: NgForm) {
    if (!AuthForm.valid) {
      return;
    }
    const email = AuthForm.value.email;
    const password = AuthForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.singin(email, password)
    } 
    else {
      authObs = this.authService.signup(email, password)      
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/home']);               
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;             
      }
    )

    AuthForm.reset();
  }
}