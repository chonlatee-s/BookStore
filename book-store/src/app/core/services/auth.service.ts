import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  protected endpoint: string;

  constructor(protected http: HttpClient) {
    this.endpoint = environment.apiURL + '/login';
  }

  loginUser(login:any) {
    return this.http.post<any>(this.endpoint, login)
  }

  loggedIn() {
    return !!localStorage.getItem('token') // ถ้ามี Token return true ถ้าไม่มี return false เอาไว้เช็คร่วมกับการ์ด
  }

  getToken() {
    return localStorage.getItem('token')
  }

}
