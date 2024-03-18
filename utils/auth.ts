import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const tokenDecode = (req: Request) => {
  const authToken = req.cookies.authToken;
  console.log(authToken);
  try {
    const decodedToken = jwt.verify(
      authToken,
      process.env.JWT_SECRET_KEY as string
    );

    return decodedToken;
  } catch {
    return false;
  };
}

export const authenticateToken = (
  req: Request,
  res: Response
) => {
  // const token = req.cookies.authToken;
  const token: any = tokenDecode(req);
  console.log("TOKEN", token);

  if (!token) {
    return res.status(401).send({ error: 'Unauthorized: Missing token' });
  }

  const user = { id: token.id, user_name: token.user_name, uuid: token.uuid, img_id: token.img_id, display_name: token.display_name };
  return user;
};