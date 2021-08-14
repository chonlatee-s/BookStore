import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/features/login/interfaces/login';
import { LoginService } from 'src/app/features/login/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async Login() {
    const email = this.email;
    const password = this.password;

    const login: Login = { email, password }

    await this.loginService.loginUser(login).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    // this.router.navigate(['/book']);
  }
}
