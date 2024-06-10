import { injectable, inject } from 'inversify'
import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from '../types';
import 'reflect-metadata'
import { IUserController } from './users.controller.interface';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService)

    this.bindRoutes([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register }
    ])
  }

  login(req: Request<unknown, unknown, UserLoginDto>, res: Response, next: NextFunction) {
    this.ok(res, 'login')
  }

  register(req: Request<unknown, unknown, UserRegisterDto>, res: Response, next: NextFunction) {
    // this.ok(res, 'register')
    next(new HTTPError(401, 'auth error', 'register'))
  }
}
