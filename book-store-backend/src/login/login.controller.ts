import { BadRequestException, Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthService } from 'src/auth/auth.service';

import { Response } from 'express';

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
  async login( 
    @Body('email') email:string, 
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ) {

    const login = await this.loginService.checkLogin(email, password)
    if(!login) {
      throw new BadRequestException('invalid credentials')
    }
    const jwt = await this.authService.validateLogin(login.uuid)
    response.cookie('jwt',jwt, {httpOnly: true})
    return {
      message:'success'
    }
  }
}
