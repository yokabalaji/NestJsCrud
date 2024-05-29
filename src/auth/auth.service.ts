<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
=======
import {
  ForbiddenException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './common/constants';
>>>>>>> 774d025 (queary selector)

@Injectable()
export class AuthService {
  constructor(
<<<<<<< HEAD
=======
    @Inject(forwardRef(() => UserService))
>>>>>>> 774d025 (queary selector)
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

<<<<<<< HEAD
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
=======
  async validateUser(username: string, pass: string): Promise<any> {
    console.log('unnnnnm yyyy')
    const user = await this.userService.findEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return 'null is provide';
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };

    const access_token = this.jwtService.sign(payload);
    const referenceToken = this.jwtService.sign(payload, {
      secret: jwtConstants.referSec,
      expiresIn: '7d',
    });
    await this.userService.updateRt(payload.sub, referenceToken);
    return {
      access_token,
      referenceToken,
    };
  }

  async refreshToken(userId: number, rt: string) {
    const user = await this.userService.getUser(userId);
    if (!user) throw new ForbiddenException('access denied');
    if (user.rToken === rt) {
      const payload = { username: user.email, sub: user.id };

      const access_token = this.jwtService.sign(payload);
      return { access_token };
    } else {
      throw new ForbiddenException('access denies');
    }
  }
>>>>>>> 774d025 (queary selector)
}
