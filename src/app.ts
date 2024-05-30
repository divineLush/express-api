import express, { Express } from 'express'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'

export class App {
  app: Express = express()
  server: Server
  port: number = 8000

  constructor(logger: LoggerService, userController: UserController) {
    this.app.use('/users', userController.router)

    this.server = this.app.listen(this.port, () => {
      logger.log(`running on http://localhost:${this.port}`)
    })
  }
}
