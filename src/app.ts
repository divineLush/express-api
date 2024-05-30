import express, { Express } from 'express'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'
import { ExceptionFilter } from './errors/exception.filter'

export class App {
  app: Express = express()
  server: Server
  port: number = 8000

  constructor(
    private logger: LoggerService,
    private userController: UserController,
    private exceptionFilter: ExceptionFilter
  ) {
    this.server = this.app.listen(this.port, () => {
      logger.log(`running on http://localhost:${this.port}`)

      this.app.use('/users', userController.router)
      this.app.use(exceptionFilter.catch.bind(this))
    })
  }
}
