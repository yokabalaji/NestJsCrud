<<<<<<< HEAD
import { Controller } from '@nestjs/common';

@Controller()
export class AppController {}
=======
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  
}
>>>>>>> 774d025 (queary selector)
