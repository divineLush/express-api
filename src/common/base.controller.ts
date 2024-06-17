import { Router, Response } from 'express'
import { injectable } from 'inversify'
import { IControllerRoute } from "./route.interface"
import { ILogger } from "../logger/logger.interface"
import 'reflect-metadata'

@injectable()
export abstract class BaseController {
  public readonly router: Router = Router()

  constructor (private logger: ILogger) {}

  ok<T>(res: Response, message: T) {
    return this.send<T>(res, 200, message)
  }

  protected bindRoutes(routes: IControllerRoute[]) {
    routes.forEach(r => {
      this.logger.log(`[${r.method}]`)
      const middleware = r.middlewares?.execute.bind(this)
      const handler = r.func.bind(this)
      const pipeline = middleware ? [middleware, handler] : handler
      this.router[r.method](r.path, pipeline)
    })
  }

  private send<T>(res: Response, code: number, message: T) {
    res.type('application/json')
    return res.status(code).json(message)
  }
}
