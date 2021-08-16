import { BadRequestException, Body, Controller, Get, Post, Req, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from './login.service';

import { Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService
  ) {}

  @Get()
  async Hilogin(@Req() request: Request) {
    // return 'hello login'
      try {
      if(!request.headers.authorization){
        throw new UnauthorizedException()
      }
      const token = request.headers.authorization.split(' ')[1]
      const data = await this.jwtService.verifyAsync('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5MDMwMDAwLCJleHAiOjE2MjkwMzAwMjB9.uJLLeyf-OBao7hMIsLfeZQn8MneHOyxQ9MsULRtUxdE');
      console.log(data)
      return 'hello login1'
    } catch(e) {
      console.log('dox')
      throw new UnauthorizedException()
    }

  }

  @Post()
  async login( @Body('email') email:string, @Body('password') password: string) {
    const login = await this.loginService.checkLogin(email, password)
    if(!login) {
      throw new BadRequestException('invalid credentials')
    }
    const jwt = await this.jwtService.signAsync({id: login.loginId})
    return {'token' : jwt}
  }
}
