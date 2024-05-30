import { App } from './app'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'

(async () => {
  const logger = new LoggerService()
  new App(logger, new UserController(logger))
})()
