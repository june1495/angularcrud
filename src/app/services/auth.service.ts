import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) {}
  signIn(user: any) {
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
}
