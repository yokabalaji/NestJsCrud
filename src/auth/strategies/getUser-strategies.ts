import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { jwtConstants } from '../common/constants';
import { JwtPayload } from '../types/jwt.payload.type';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'user-strategies') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(req: Request, payload: JwtPayload): Promise<JwtPayload> {
    const accessToken = req?.get('authorization')?.replace('Bearer', '').trim();

    if (!accessToken) throw new ForbiddenException('Access token malformed');

    return {
      ...payload
    };
  }
}
