import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  Hilogin() {
    return 'hello login'
  }

  @Post()
  login( @Body('email') email:string, @Body('password') password: string) {
    return this.loginService.checkLogin(email, password);
  }
}
