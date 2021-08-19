import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LoginController } from './login.controller';
import { LoginEntity } from './login.entity';
import { LoginService } from './login.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoginEntity]),
    AuthModule
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
