import { Request, Response, NextFunction } from "express";
import { UserRegisterDto } from "./dto/user.register.dto";
import { UserLoginDto } from "./dto/user.login.dto";

export interface IUserController {
  login: (req: Request<unknown, unknown, UserLoginDto>, res: Response, next: NextFunction) => void
  register: (req: Request<unknown, unknown, UserRegisterDto>, res: Response, next: NextFunction) => void
}
