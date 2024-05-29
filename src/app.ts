import express, { Express } from 'express'
import { userRoutes } from './users/users'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'

export class App {
  app: Express = express()
  server: Server
  port: number = 8000

  constructor(logger: LoggerService) {
    this.server = this.app.listen(this.port, () => {
      logger.log(`running on http://localhost:${this.port}`)
    })
  }

  init() {
    this.app.use('/users', userRoutes)
  }
}
