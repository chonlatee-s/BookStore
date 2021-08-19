import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor( private jwtService: JwtService ) {}

  async validateLogin(uuid:string) {
    return await this.jwtService.signAsync({id: uuid})
  }

  async verifyToken(token:string) {
    return await this.jwtService.verifyAsync(token)
  }
}
