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
  checkLogin(email: string, password: string) {
    return this.loinRepository.findOne({ email: email, password: password });
  }
}
