import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { ILogger } from "../logger/logger.interface";

export class UserController extends BaseController {
  constructor(logger: ILogger) {
    super(logger)

    this.bindRoutes([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register }
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'login')
  }

  register(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, 'register')
    next(new HTTPError(401, 'auth error', 'register'))
  }
}
