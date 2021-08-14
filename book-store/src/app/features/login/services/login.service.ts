import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AuthService {

  constructor(protected http: HttpClient) { 
    super(http, '/login')
  }
}
