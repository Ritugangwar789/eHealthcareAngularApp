import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  showSpinner: boolean = false;
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Login() {
    this.showSpinner = true;
    if (this.loginForm.valid) {
      let bodyData = {
        inputusernameString: this.email,
        inputpasswordString: this.password,
      };
      this.http
        .post('http://localhost:8080/auth', bodyData)
        .subscribe((resultData: any) => {
          this.authService.setUsername(resultData.username);
          if (resultData.message == 'Authentication Failed') {
            alert('Invalid Username or Password');
          } else if (resultData.message == 'User API Access') {
            // alert('User login successful');
            this.router.navigateByUrl('/dashboard');
          } else if (resultData.message == 'Admin API Access') {
            this.router.navigateByUrl('/dashboard');
          } else {
            alert('Unknown error');
          }
          this.showSpinner = false;
        });
    } else {
      console.log('form invalid');
      this.showSpinner = false;
    }
  }
}
