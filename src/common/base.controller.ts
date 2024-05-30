import { LoggerService } from "../logger/logger.service"
import { Router, Response } from 'express'
import { IControllerRoute } from "./route.interface"

export abstract class BaseController {
  public readonly router: Router = Router()

  constructor (private logger: LoggerService) {}

  ok<T>(res: Response, message: T) {
    return this.send<T>(res, 200, message)
  }

  protected bindRoutes(routes: IControllerRoute[]) {
    routes.forEach(r => {
      this.logger.log(`[${r.method}]`)
      this.router[r.method](r.path, r.func.bind(this))
    })
  }

  private send<T>(res: Response, code: number, message: T) {
    res.type('application/json')
    return res.status(code).json(message)
  }
}
