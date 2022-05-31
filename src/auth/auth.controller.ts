import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// Handle request.
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // DTO
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('testSignin')
  testLogin(
    @Body('email') email: string,
    // ParseIntPipe can control the argument is number
    // But we can put those check into dto.
    @Body('password', ParseIntPipe) password: number,
  ) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeOfPassword: typeof password,
    });
    //return this.authService.signin();
    return 'Testing login';
  }

  @Post('signin')
  login(@Body() dto: AuthDto) {
    // login(@Body('email') email: string, @Body('password') password: string)
    return this.authService.signin(dto);
  }
}
