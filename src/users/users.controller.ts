import { injectable, inject } from 'inversify'
import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from '../types';
import 'reflect-metadata'
import { IUserController } from './users.controller.interface';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';
import { UserService } from './users.service';
import { IUserService } from './users.service.interface';
import { ValidateMiddleware } from '../common/validate.middleware';
import { ClassConstructor } from 'class-transformer';
import { HTTPError } from '../errors/http-error.class';

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(
    @inject(TYPES.ILogger) private loggerService: ILogger,
    @inject(TYPES.UserService) private userService: IUserService,
  ) {
    super(loggerService)

    this.bindRoutes([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register, middlewares: new ValidateMiddleware(UserRegisterDto as ClassConstructor<object>) }
    ])
  }

  login(req: Request<unknown, unknown, UserLoginDto>, res: Response, next: NextFunction) {
    console.log(req.body)

    this.ok(res, 'login')
  }

  async register(req: Request<unknown, unknown, UserRegisterDto>, res: Response, next: NextFunction) {
    const { email, name, password } = req.body
    const userDto = {
      email,
      name,
      password
    } as UserRegisterDto;

    const user = await this.userService.createUser(userDto)

    if (!user) {
      next(new HTTPError(401, 'auth error', 'register'))
    }

    this.ok(res, user)
  }
}
