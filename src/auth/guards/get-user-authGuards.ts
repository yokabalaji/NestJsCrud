import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GetUserAuthGuard extends AuthGuard('user-strategies') {}