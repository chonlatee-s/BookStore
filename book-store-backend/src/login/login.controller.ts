import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

import { AuthService } from 'src/auth/auth.service';

@Controller('login')
export class LoginController {
  constructor(
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  @Get()
  async Hilogin() {
    return 'hello login'
  }

  @Post()
  async login( @Body('email') email:string, @Body('password') password: string) {
    const login = await this.loginService.checkLogin(email, password)
    if(!login) {
      throw new BadRequestException('invalid credentials')
    }
    const jwt = await this.authService.validateLogin(login.uuid)
    return {'token' : jwt}
  }
}
