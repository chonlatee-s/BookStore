import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginEntity } from './login.entity';
import { LoginService } from './login.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoginEntity]),
    JwtModule.register({
      secret: 'love',
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
