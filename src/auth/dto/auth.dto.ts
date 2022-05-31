import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// If we only give the decrator directly, it won't change anything.
// Because we don't tell the nestJS to use the pipe logic globally.
// We need some extra setting.
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
