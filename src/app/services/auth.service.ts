import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'https://crudbackts.herokuapp.com/api/v1';
  constructor(private http: HttpClient, private router: Router) {}
  signIn(user: any) {
    console.log(user);
    return this.http.post<any>(`${this.API_URL}/login`, user);
  }
  signUp(user: any) {
    return this.http.post<any>(`${this.API_URL}/register`, user);
  }
  getSession() {
    return JSON.parse(localStorage.getItem('jwt') as any);
  }
  isLogin() {
    if (this.getSession()) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
  }
}
