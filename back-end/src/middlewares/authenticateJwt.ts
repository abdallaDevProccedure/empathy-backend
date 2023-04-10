import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface TokenPayload {
  userId: number;
}

interface RequestWithUserId extends Request {
  userId?: number;
}

export const authenticateJwt = (req: RequestWithUserId, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret') as TokenPayload;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid token' });
  }
};
