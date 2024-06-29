import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      // user: JwtPayload;
      user?: JwtPayload & { role: string };
    }
  }
}
