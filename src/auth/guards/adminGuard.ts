import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      return false;
    } else {
      console.log(request.user.userId);
      const user = await this.userService.getUser(request.user.userId);
      console.log(user.admin)
      return user.admin;
    }
  }
}
