import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  //   @UseGuards(AuthGuard('jwt')) // Connecting to the jwt.strategy.ts
  //   @Get('me')
  //   getMe(@Req() req: Request) { // import { Request } from 'express';
  //     return req.user;
  //   }

  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log({ email });
    return user;
  }

  @Patch()
  editUser() {
    return null;
  }
}
