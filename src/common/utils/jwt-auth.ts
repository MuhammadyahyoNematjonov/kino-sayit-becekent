import { JwtSignOptions } from '@nestjs/jwt';

export const JwtAccesToken: JwtSignOptions = {
  secret: 'esrdgujk',
  expiresIn: '40m',
};

export const JwtRefreshToken: JwtSignOptions = {
  secret: 'oiytythe',
  expiresIn: '20m',
};
