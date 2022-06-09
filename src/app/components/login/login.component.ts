import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  token: any;
  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  signIn() {
    this.authservice.signIn(this.userForm.value).subscribe(
      (res) => {
        localStorage.setItem('jwt', JSON.stringify(res));
        this.userForm.reset();
        this.router.navigate(['product']);
      },
      (err) => console.log(err)
    );
  }
  // static getSession() {
  //   return JSON.parse(localStorage.getItem('user') as any);
  // }
  // static isLogin() {
  //   if (this.getSession()) {
  //     return true;
  //   }
  //   return false;
  // }
}
