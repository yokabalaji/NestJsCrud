<<<<<<< HEAD
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
=======
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RtAuthGuard } from './guards/jwt-rt.guard';
import { GetCurrentUserId } from '../user/decorators/get-current-user-id-decorator.type';
import { GetCurrentUser } from '../user/decorators/get-current-user-decorator';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDetail } from 'src/user/decorators/current-user-data.decorator';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @Public()
  @UseGuards(RtAuthGuard)
  @Post('refresh')
  refreshToken(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshToken(userId, refreshToken);
  }

  @Get('me')
  getMe(@UserDetail() user: any) {
    return this.userService.getUser(user.userId);
  }
>>>>>>> 774d025 (queary selector)
}
