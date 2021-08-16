import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginEntity } from './login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private loinRepository: Repository<LoginEntity>
  ) {}
  async checkLogin(email: string, password: string) {
    return await this.loinRepository.findOne({ email: email, password: password });
    // const login = await this.loinRepository.findOne({ email: email, password: password });
    // if(!login) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // return login
  }
}
