import express, { Express } from 'express'
import { injectable, inject } from 'inversify'
import { json } from 'body-parser'
import { Server } from 'http'
import { UserController } from './users/users.controller'
import { ExceptionFilter } from './errors/exception.filter'
import { ILogger } from './logger/logger.interface'
import { TYPES } from './types'
import 'reflect-metadata'

@injectable()
export class App {
  app: Express = express()
  server: Server
  port: number = 8000

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.UserController) private userController: UserController,
    @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter
  ) {
    this.server = this.app.listen(this.port, () => {
      logger.log(`running on http://localhost:${this.port}`)

      this.app.use('/users', userController.router)
      this.app.use(exceptionFilter.catch.bind(this))
      this.app.use(json())
    })
  }
}
