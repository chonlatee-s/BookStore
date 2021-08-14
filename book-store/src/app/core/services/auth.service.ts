import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthService {
  protected endpoint: string;

  constructor(protected http: HttpClient, resourcePath: string) {
    this.endpoint = environment.apiURL + resourcePath;
  }

  loginUser(login:any) {
    return this.http.post<any>(this.endpoint, login)
  }

}
